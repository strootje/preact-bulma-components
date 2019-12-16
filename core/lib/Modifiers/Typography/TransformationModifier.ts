import { PropBuilder } from '../../PropBuilder';
import { TextTransformations } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface TransformationModifierProps {
	transform?: TextTransformations;
}

export const AddTransformationModifierProps = <P extends TransformationModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.transform)
});
