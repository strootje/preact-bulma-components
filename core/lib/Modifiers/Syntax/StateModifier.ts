import { PropBuilder } from '../../PropBuilder';
import { StateTypes } from '../../Types/Bulma';
import { ComponentProps, ListOfAttribs, ListOfClasses } from '../../Types/Preact';

export type StateModifierProps = {
	[_ in StateTypes]?: boolean;
}

export interface StateModifierAttribs extends EventTarget {
	disabled?: boolean;
}

export const AddStateModifierProps = <P extends StateModifierProps>(props: P): ListOfClasses => ({
	...PropBuilder(props.loading, 'is-loading'),
	...PropBuilder(props.outlined, 'is-outlined')
});

export const AddStateModifierAttribs = <P extends StateModifierProps, A extends StateModifierAttribs>(props: ComponentProps<P, A>): ListOfAttribs<A> => ({
	...PropBuilder(props.disabled, 'disabled')
});
