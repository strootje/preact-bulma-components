import { ListOfClasses } from '../../Types/Preact';

export interface SpacingModifierProps {
	marginless?: boolean;
	paddingless?: boolean;
}

export const AddSpacingModifierProps = <P extends SpacingModifierProps>(props: P): ListOfClasses => {
	if (!props.marginless && !props.paddingless) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (props.marginless) {
		classes[`is-marginless`] = !!props.marginless;
	}

	if (props.paddingless) {
		classes[`is-paddingless`] = !!props.paddingless;
	}

	return classes;
};
