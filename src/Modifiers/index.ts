import { ListOfClasses } from '../Bulma';
import { AddColorModifierClasses, ColorModifierProps } from './Color';
import { AddHelperModifierClasses, HelperModifierProps } from './Helpers';
import { AddResponsiveModifierClasses, ResponsiveModifierProps } from './Responsive';
import { AddTypographyModifierClasses, TypographyModifierProps } from './Typography';

export interface ModifierProps extends
	JSX.DOMAttributes,
	HelperModifierProps,
	ResponsiveModifierProps,
	ColorModifierProps,
	TypographyModifierProps {
}

export function AddModifierClasses(props: ModifierProps): ListOfClasses {
	return {
		...AddHelperModifierClasses(props),
		...AddResponsiveModifierClasses(props),
		...AddColorModifierClasses(props),
		...AddTypographyModifierClasses(props)
	};
}
