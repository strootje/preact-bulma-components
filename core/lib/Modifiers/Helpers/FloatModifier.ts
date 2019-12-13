import { FloatTypes } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface FloatModifierProps {
	float?: FloatTypes;
}

export const AddFloatModifierProps = <P extends FloatModifierProps>(props: P): ListOfClasses => {
	if (!props.float || typeof props.float != 'string') {
		return {};
	}

	const classes: ListOfClasses = {};
	if (props.float === 'clear') {
		classes[`is-${props.float}fix`] = !!props.float;
	} else {
		classes[`is-pulled-${props.float}`] = !!props.float;
	}

	return classes;
};
