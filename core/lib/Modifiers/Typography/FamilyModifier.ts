import { TextFamilies } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface FamilyModifierProps {
	font?: TextFamilies;
}

export const AddFamilyModifierProps = <P extends FamilyModifierProps>(props: P): ListOfClasses => {
	return {
		[`is-family-${props.font}`]: !!props.font
	};
};
