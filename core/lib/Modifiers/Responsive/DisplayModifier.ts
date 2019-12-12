import { BreakpointsWithFallback, DisplayTypes, DisplayTypesWithHidden, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface DisplayModifierProps {
	display?: DisplayTypes | WithBreakpoints<DisplayTypesWithHidden>;
}

export const AddDisplayModifierProps = <P extends DisplayModifierProps>(props: P): ListOfClasses => {
	if (!props.display) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.display === 'string') {
		classes[`is-${props.display}`] = !!props.display;
	} else {
		const value = props.display;
		Object.keys(props.display).forEach((key: BreakpointsWithFallback) => {
			if (key === 'fallback') {
				classes[`is-${value[key]}`] = !!value[key];
			} else {
				classes[`is-${value[key]}-${key}`] = !!value[key];
			}
		});
	}

	return classes;
};
