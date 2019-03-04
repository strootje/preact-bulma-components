import { AddBreakpointClasses, ListOfClasses, WithBreakpoints } from '../Bulma';

export type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type TextSizes = WithBreakpoints<TextSize>;
export type TextAlignment = 'centered' | 'justified' | 'left' | 'right';

export interface TypographyModifierProps {
	'text-size'?: TextSize | TextSizes;
	'text-align'?: TextAlignment;
}

export function AddTypographyModifierClasses(props: TypographyModifierProps): ListOfClasses {
	return {
		...AddBreakpointClasses(props['text-size'], 'is-size'),
		...AddBreakpointClasses(props['text-align'], 'has-text')
	};
}
