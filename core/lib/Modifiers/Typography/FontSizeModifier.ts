import { BreakpointsWithFallback, TextSizes, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface FontSizeModifierProps {
	'font-size'?: TextSizes | WithBreakpoints<TextSizes>;
}

export const AddFontSizeModifierProps = <P extends FontSizeModifierProps>(props: P): ListOfClasses => {
	if (!props['font-size']) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props['font-size'] === 'string') {
		classes[`is-size-${props['font-size']}`] = !!props['font-size'];
	} else {
		const value = props['font-size'];
		Object.keys(props['font-size']).forEach((key: BreakpointsWithFallback) => {
			if (key === 'fallback') {
				classes[`is-size-${value[key]}`] = !!value[key];
			} else {
				classes[`is-size-${value[key]}-${key}`] = !!value[key];
			}
		});
	}

	return classes;
};
