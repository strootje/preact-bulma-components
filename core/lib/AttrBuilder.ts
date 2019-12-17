import { BreakpointsWithFallback, WithBreakpoints } from './Types/Bulma';
import { ListOfAttribs, ListOfClasses, Props } from './Types/Preact';

export function AttrBuilder<P = {}, A = {}>(props: Props<P, A>, key: (keyof Props<P, A>)): ListOfClasses;
export function AttrBuilder<P = {}, A = {}>(props: Props<P, A>, key: (keyof Props<P, A>), prefix: string): ListOfClasses;
export function AttrBuilder<P = {}, A = {}, E extends EventTarget = HTMLDivElement>(props: Props<P, A>, key: (keyof Props<P, A>), asClass: false): ListOfAttribs<A, E>;
export function AttrBuilder<P = {}, A = {}, E extends EventTarget = HTMLDivElement>(props: Props<P, A>, key: (keyof Props<P, A>), asClassOrPrefixOrReducer: (boolean | string) = true): ListOfClasses | ListOfAttribs<A, E> {
	const value = props[key];

	if (!value) {
		return {};
	}

	const asClass = !!asClassOrPrefixOrReducer;
	let prefix = ((typeof asClassOrPrefixOrReducer === 'string') ? asClassOrPrefixOrReducer : 'is');

	if (asClass) {
		if (typeof value === 'boolean' && !!value && prefix.indexOf(key as string) < 0) {
			prefix = `${prefix}-${key}`;
		}

		return propBuilder(mapToPropWithFallback(value), prefix);
	} else {
		return { [`${key}`]: value };
	}
}

const mapToPropWithFallback = <PropType, PropBreaks extends string = BreakpointsWithFallback>(prop: PropType | WithBreakpoints<PropType, PropBreaks>): WithBreakpoints<PropType, PropBreaks> => {
	let props: { fallback?: PropType } = {};

	if (typeof prop != 'object') {
		props.fallback = prop;
	} else {
		props = prop;
	}

	return props;
}

const propBuilder = <PropType, PropBreaks extends string>(props: WithBreakpoints<PropType, PropBreaks>, prefix: string): ListOfClasses => {
	const classes: ListOfClasses = {};

	Object.keys(props).forEach((name: PropBreaks) => {
		const value = props[name];
		if (!value) {
			return;
		}

		let valueString = `-${value}`;
		if (typeof value === 'boolean' && !!value) {
			valueString = ``
		}

		let breakpoint = `-${name}`;
		if (name === 'fallback') {
			breakpoint = ``;
		}

		classes[`${prefix}${valueString}${breakpoint}`] = true;
	});

	return classes;
};

