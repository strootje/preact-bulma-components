import { TextFamilies } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface FamilyModifierProps {
	font?: TextFamilies;
}

export const AddFamilyModifierProps = <P extends FamilyModifierProps>(props: P): ListOfClasses => {
	if (!props.font || typeof props.font != 'string') {
		return {};
	}

	const classes: ListOfClasses = {};
	classes[`is-family-${props.font}`] = !!props.font;

	return classes;
};
