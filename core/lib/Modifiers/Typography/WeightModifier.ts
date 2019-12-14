import { TextWeights } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface WeightModifierProps {
	weight?: TextWeights;
}

export const AddWeightModifierProps = <P extends WeightModifierProps>(props: P): ListOfClasses => {
	return {
		[`has-text-weight-${props.weight}`]: !!props.weight
	}
};
