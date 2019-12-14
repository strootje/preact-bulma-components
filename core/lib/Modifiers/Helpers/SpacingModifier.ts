import { ListOfClasses } from '../../Types/Preact';

export interface SpacingModifierProps {
	marginless?: boolean;
	paddingless?: boolean;
}

export const AddSpacingModifierProps = <P extends SpacingModifierProps>(props: P): ListOfClasses => {
	return {
		[`is-marginless`]: !!props.marginless,
		[`is-paddingless`]: !!props.paddingless
	};
};
