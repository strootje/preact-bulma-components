import { AttrBuilder } from '../../AttrBuilder';
import { ColorsStyled } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface StyleModifierProps {
	style?: ColorsStyled;
}

export const AddStyleModifierProps = <P extends StyleModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'style')
});
