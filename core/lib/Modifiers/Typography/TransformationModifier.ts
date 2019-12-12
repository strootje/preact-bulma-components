import { TextTransformations } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface TransformationModifierProps {
	transform?: TextTransformations;
}

export const AddTransformationModifierProps = <P extends TransformationModifierProps>(props: P): ListOfClasses => {
	if (!props.transform || typeof props.transform != 'string') {
		return {};
	}

	const classes: ListOfClasses = {};
	classes[`is-${props.transform}`] = !!props.transform;

	return classes;
};
