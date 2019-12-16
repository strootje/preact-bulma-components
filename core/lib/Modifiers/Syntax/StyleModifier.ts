import { PropBuilder } from '../../PropBuilder';
import { ColorsStyled } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface StyleModifierProps {
	style?: ColorsStyled;
}

export const AddStyleModifierProps = <P extends StyleModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.style)
});
