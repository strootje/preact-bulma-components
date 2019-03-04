import { AddBreakpointClasses, ListOfClasses, WithBreakpoints } from '../Bulma';

export type DisplayKind = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
export type DisplayKinds = WithBreakpoints<DisplayKind>;

export interface ResponsiveModifierProps {
	display?: DisplayKind | DisplayKinds;
}

// tslint:disable-next-line: variable-name
export function AddResponsiveModifierClasses(props: ResponsiveModifierProps): ListOfClasses {
	return {
		...AddBreakpointClasses(props.display)
	};
}
