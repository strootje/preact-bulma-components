import { PropBuilder } from '../../PropBuilder';
import { TextWeights } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface WeightModifierProps {
	weight?: TextWeights;
}

export const AddWeightModifierProps = <P extends WeightModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.weight, 'has-text-weight')
});
