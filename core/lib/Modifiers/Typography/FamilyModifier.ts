import { PropBuilder } from '../../PropBuilder';
import { TextFamilies } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface FamilyModifierProps {
	font?: TextFamilies;
}

export const AddFamilyModifierProps = <P extends FamilyModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.font, 'is-family')
});
