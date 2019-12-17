import { AttrBuilder } from '../../AttrBuilder';
import { Colors } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface ColorModifierProps {
	'background-color'?: Colors;
	'text-color'?: Colors;
}

export const AddColorModifierProps = <P extends ColorModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'background-color', 'has-background'),
	...AttrBuilder<P, A>(props, 'text-color', 'has-text')
});
