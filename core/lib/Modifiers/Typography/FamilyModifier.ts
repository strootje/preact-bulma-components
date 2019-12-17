import { AttrBuilder } from '../../AttrBuilder';
import { TextFamilies } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface FamilyModifierProps {
	font?: TextFamilies;
}

export const AddFamilyModifierProps = <P extends FamilyModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'font', 'is-family')
});
