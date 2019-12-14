import { StateTypes } from '../../Types/Bulma';
import { ComponentProps, ListOfAttribs, ListOfClasses } from '../../Types/Preact';

export type StateModifierProps = {
	[_ in StateTypes]?: boolean;
}

export interface StateModifierAttribs extends EventTarget {
	disabled?: boolean;
}

export const AddStateModifierProps = <P extends StateModifierProps>(props: P): ListOfClasses => ({
	[`is-outlined`]: !!props.outlined,
	[`is-loading`]: !!props.loading
});

export const AddStateModifierAttribs = <P extends StateModifierProps, A extends StateModifierAttribs>(props: ComponentProps<P, A>): ListOfAttribs<A> => ({
	[`disabled`]: !!props.disabled
});
