import { BreakpointsWithFallback, TextAlignments, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface AlignmentModifierProps {
	align?: TextAlignments | WithBreakpoints<TextAlignments>;
}

export const AddAlignmentModifierProps = <P extends AlignmentModifierProps>(props: P): ListOfClasses => {
	if (!props.align) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.align === 'string') {
		classes[`has-text-${props.align}`] = !!props.align;
	} else {
		const value = props.align;
		Object.keys(props.align).forEach((key: BreakpointsWithFallback) => {
			if (key === 'fallback') {
				classes[`has-text-${value[key]}`] = !!value[key];
			} else {
				classes[`has-text-${value[key]}-${key}`] = !!value[key];
			}
		});
	}

	return classes;
};
