import { ColorsExtra, ListOfClasses } from '../Bulma';

export interface ColorModifierProps {
	'text-color'?: ColorsExtra;
	'background-color'?: ColorsExtra;
}

export function AddColorModifierClasses(props: ColorModifierProps): ListOfClasses {
	return {
		[`has-text-${props['text-color']}`]: !!props['text-color'],
		[`has-background-${props['background-color']}`]: !!props['background-color']
	};
}
