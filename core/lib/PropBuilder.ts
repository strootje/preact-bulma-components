import { Breakpoints, BreakpointsWithFallback, WithBreakpoints } from "./Types/Bulma";
import { ListOfClasses } from "./Types/Preact";

export interface Reducer<PropBreak extends string, PropValue> {
	(breakpoint: PropBreak, value: PropValue): string;
}

export function PropBuilder<PropType>(prop: PropType): ListOfClasses;
export function PropBuilder<PropType>(prop: PropType, reducer: string): ListOfClasses;
export function PropBuilder<PropType, PropBreaks extends string = Breakpoints>(prop: WithBreakpoints<PropType, PropBreaks>): ListOfClasses;
export function PropBuilder<PropType, PropBreaks extends string = Breakpoints>(prop: WithBreakpoints<PropType, PropBreaks>, reducer: string): ListOfClasses;
export function PropBuilder<PropType, PropBreaks extends string = Breakpoints>(prop: (PropType | WithBreakpoints<PropType, PropBreaks>), reducer?: string): ListOfClasses {
	let props: { fallback?: PropType } = {};
	let prefix: string = 'is';

	if (typeof prop != 'object') {
		props.fallback = prop;
	} else {
		props = prop;
	}

	if (typeof reducer === 'string') {
		prefix = reducer;
	}

	return propBuilder(props, prefix);
}

const propBuilder = <PropType>(props: WithBreakpoints<PropType>, prefix: string): ListOfClasses => {
	const classes: ListOfClasses = {};

	Object.keys(props).forEach((key: BreakpointsWithFallback) => {
		const value = props[key];
		if (!value) {
			return;
		}

		let valueString = `-${value}`;
		if (typeof value === 'boolean') {
			valueString = ``
		}

		let breakpoint = `-${key}`;
		if (key === 'fallback') {
			breakpoint = ``;
		}

		classes[`${prefix}${valueString}${breakpoint}`] = true;
	});

	return classes;
};
