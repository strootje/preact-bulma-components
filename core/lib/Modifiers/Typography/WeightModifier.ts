import { TextWeights } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface WeightModifierProps {
	weight?: TextWeights;
}

export const AddWeightModifierProps = <P extends WeightModifierProps>(props: P): ListOfClasses => {
	if (!props.weight || typeof props.weight != 'string') {
		return {};
	}

	const classes: ListOfClasses = {};
	classes[`has-text-weight-${props.weight}`] = !!props.weight;

	return classes;
};
