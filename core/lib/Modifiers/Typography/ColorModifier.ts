import { ColorFields, Colors, ColorsStyled, WithBreakpoints } from '../../Types/Bulma';
import { ListOfClasses } from '../../Types/Preact';

export interface ColorModifierProps {
	color?: ColorsStyled | WithBreakpoints<Colors, ColorFields>;
}

export const AddColorModifierProps = <P extends ColorModifierProps>(props: P): ListOfClasses => {
	if (!props.color) {
		return {};
	}

	const classes: ListOfClasses = {};
	if (typeof props.color === 'string') {
		classes[`is-${props.color}`] = !!props.color;
	} else {
		const value = props.color;
		Object.keys(props.color).forEach((key: ColorFields) => {
			classes[`has-${key}-${value[key]}`] = !!value[key]
		});
	}

	return classes;
};
