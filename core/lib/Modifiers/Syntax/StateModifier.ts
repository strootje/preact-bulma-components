import { AttrBuilder } from '../../AttrBuilder';
import { StateTypes } from '../../Types/Bulma';
import { ListOfAttribs, ListOfClasses, Props } from '../../Types/Preact';

export type StateModifierProps = {
	[_ in StateTypes]?: boolean;
}

export interface StateModifierAttribs {
	disabled?: boolean;
}

export const AddStateModifierProps = <P extends StateModifierProps, A extends StateModifierAttribs>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'loading'),
	...AttrBuilder<P, A>(props, 'outlined')
});

export const AddStateModifierAttribs = <P extends StateModifierProps, A extends StateModifierAttribs, E extends EventTarget>(props: Props<P, A>): ListOfAttribs<A, E> => ({
	...AttrBuilder<P, A, E>(props, 'disabled', false)
});
