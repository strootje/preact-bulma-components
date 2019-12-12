// ##########################
// ### Bulma Types
// ##########################

export type BreakpointsThisSpecific =
	'mobile' |
	'tablet-only' |
	'desktop-only' |
	'widescreen-only';

export type BreakpointsThisAndLarger =
	'touch' |
	'tablet' |
	'desktop' |
	'widescreen' |
	'fullhd';

export type Breakpoints =
	BreakpointsThisSpecific |
	BreakpointsThisAndLarger;

export type BreakpointsWithFallback =
	'fallback' |
	Breakpoints;

export type WithBreakpoints<T, B extends string = BreakpointsWithFallback> = {
	[_ in B]?: T
};

// ### Colors
// ##########################

export type ColorFields =
	'background' |
	'text';

export type ColorsStyled =
	'primary' |
	'link' |
	'info' |
	'success' |
	'warning' |
	'danger';

export type ColorsNamed =
	'white' |
	'black' |
	'light' |
	'dark' |
	'black-bis' |
	'black-ter' |
	'gray-darker' |
	'gray-dark' |
	'gray' |
	'gray-light' |
	'gray-lighter' |
	'white-ter' |
	'white-bis';

export type Colors =
	ColorsStyled |
	ColorsNamed;

// ### Sizes
// ##########################

export type SizesNamed =
	'full' |
	'four-fifths' |
	'three-quarters' |
	'two-thirds' |
	'three-fifths' |
	'half' |
	'two-fifths' |
	'one-third' |
	'one-quarter' |
	'one-fifth';

export type SizesNumbered =
	'1' |
	'2' |
	'3' |
	'4' |
	'5' |
	'6' |
	'7' |
	'8' |
	'9' |
	'10' |
	'11' |
	'12';

export type Sizes =
	SizesNamed |
	SizesNumbered;

// ### Display
// ##########################

export type DisplayTypes =
	'block' |
	'flex' |
	'inline' |
	'inline-block' |
	'inline-flex';

export type DisplayTypesWithHidden =
	'hidden' |
	DisplayTypes;

// ### Text
// ##########################

export type TextSizes =
	'1' |
	'2' |
	'3' |
	'4' |
	'5' |
	'6' |
	'7';

export type TextAlignments =
	'centered' |
	'justified' |
	'left' |
	'right';

export type TextTransformations =
	'capitalized' |
	'lowercase' |
	'uppercase' |
	'italic';

export type TextWeights =
	'light' |
	'normal' |
	'medium' |
	'semibold' |
	'bold';

export type TextFamilies =
	'sans-serif' |
	'monospace' |
	'primary' |
	'secondary' |
	'code';
