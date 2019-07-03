export type ListOfAttributes<A> = { [_ in keyof A]?: any; };
export interface ListOfClasses { [_: string]: boolean; }

export type Breakpoints = 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd';
export type BreakpointsWithFallback = 'fallback' | Breakpoints;
export type WithBreakpoints<T> = { [_ in BreakpointsWithFallback]?: T };

export type Colors = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'black' | 'dark' | 'light' | 'white';
export type ColorsExtra = 'black-bis' | 'black-ter' | 'gray-darker' | 'gray-dark' | 'gray' | 'gray-light' | 'gray-lighter' | 'white-ter' | 'white-bis' | Colors;
export type Directions = 'horizontal' | 'vertical' | 'both';
export type Sides = 'left' | 'right';
export type Alignments = 'centered' | Sides;

export type NamedSizes = 'four-fifths' | 'three-quarters' | 'two-thirds' | 'three-fifths' | 'three-quarters' | 'half' | 'two-fifths' | 'one-third' | 'one-quarter' | 'one-fifth';
export type NumberedSizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type Sizes = NamedSizes | NumberedSizes;
export type OtherSizes = 'small' | 'normal' | 'medium' | 'large';

export type InputStates = 'normal' | 'hover' | 'focus' | 'disabled';
export type States = InputStates | 'active' | 'loading' | 'static';

type Reducer<T> = (key: string, value?: T) => string;

export function AddBreakpointClasses<T>(prop: (T | WithBreakpoints<T> | undefined), reducer?: (Reducer<T> | string)): ListOfClasses {
	let value: WithBreakpoints<T>;
	let test: Reducer<T>;

	if (prop === undefined) {
		value = {};
	} else if (typeof prop !== 'object') {
		value = { fallback: prop };
	} else {
		value = prop;
	}

	if (reducer === undefined) {
		test = (k, v) => `is-${v}${k !== 'fallback' ? `-${k}` : ''}`;
	} else if (typeof reducer === 'string') {
		test = (k, v) => `${reducer}-${v}${k !== 'fallback' ? `-${k}` : ''}`;
	} else {
		test = reducer;
	}

	return Object.keys(value).reduce((prev, cur: BreakpointsWithFallback) => ({ ...prev, [test(cur, value[cur])]: true }), {});
}
