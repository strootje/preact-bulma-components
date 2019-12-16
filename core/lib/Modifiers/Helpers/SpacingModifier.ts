import { PropBuilder } from '../../PropBuilder';
import { ListOfClasses } from '../../Types/Preact';

export interface SpacingModifierProps {
	marginless?: boolean;
	paddingless?: boolean;
}

export const AddSpacingModifierProps = <P extends SpacingModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.marginless, 'is-marginless'),
	...PropBuilder(props.paddingless, 'is-paddingless')
});
