import { Colors, ColorsStyled } from '../Types/Bulma';
import { ListOfClasses } from '../Types/Preact';

interface ColorModifierAlternativeProps {
	background?: Colors;
	text?: Colors;
}

export interface ColorModifierProps {
	color?: ColorsStyled | ColorModifierAlternativeProps;
}

export const AddColorModifierProps = <P extends ColorModifierProps>(props: P): ListOfClasses => {
	if (!props.color) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.color === 'string') {
		classes[`is-${props.color}`] = !!props.color;
	} else {
		if (props.color.background) {
			classes[`has-background-${props.color.background}`] = !!props.color.background;
		}

		if (props.color.text) {
			classes[`has-text-${props.color.text}`] = !!props.color.text;
		}
	}

	return classes;
};
