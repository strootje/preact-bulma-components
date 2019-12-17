import { AttrBuilder } from '../../AttrBuilder';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface SpacingModifierProps {
	marginless?: boolean;
	paddingless?: boolean;
}

export const AddSpacingModifierProps = <P extends SpacingModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'marginless'),
	...AttrBuilder<P, A>(props, 'paddingless')
});
