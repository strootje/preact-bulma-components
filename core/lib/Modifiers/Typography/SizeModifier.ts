import { BreakpointsWithFallback, TextSizes, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface SizeModifierProps {
	size?: TextSizes | WithBreakpoints<TextSizes>;
}

export const AddSizeModifierProps = <P extends SizeModifierProps>(props: P): ListOfClasses => {
	if (!props.size) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.size === 'string') {
		classes[`is-size-${props.size}`] = !!props.size;
	} else {
		const value = props.size;
		Object.keys(props.size).forEach((key: BreakpointsWithFallback) => {
			if (key === 'fallback') {
				classes[`is-size-${value[key]}`] = !!value[key];
			} else {
				classes[`is-size-${value[key]}-${key}`] = !!value[key];
			}
		});
	}

	return classes;
};
