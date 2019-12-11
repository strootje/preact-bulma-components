import { Breakpoints, DisplayTypes, WithBreakpoints } from '../Types/Bulma';
import { ListOfClasses } from '../Types/Preact';

export interface DisplayModifierProps {
	display?: DisplayTypes | WithBreakpoints<DisplayTypes>;
	hidden?: Breakpoints | WithBreakpoints<DisplayTypes>;
}

export const AddDisplayModifierProps = <P extends DisplayModifierProps>(props: P): ListOfClasses => {
	if (!props.display && !props.hidden) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.display === 'string') {
		classes[`is-${props.display}`] = !!props.display;
	} else {
		// todo
	}

	if (typeof props.hidden === 'string') {
		classes[`is-hidden-${props.hidden}`] = !!props.hidden;
	} else {
		// todo
	}

	return classes;
};
