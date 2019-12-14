import { TextTransformations } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface TransformationModifierProps {
	transform?: TextTransformations;
}

export const AddTransformationModifierProps = <P extends TransformationModifierProps>(props: P): ListOfClasses => {
	return {
		[`is-${props.transform}`]: !!props.transform
	};
};
