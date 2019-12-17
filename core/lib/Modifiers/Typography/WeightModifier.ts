import { AttrBuilder } from '../../AttrBuilder';
import { TextWeights } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface WeightModifierProps {
	weight?: TextWeights;
}

export const AddWeightModifierProps = <P extends WeightModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'weight', 'has-text-weight')
});
