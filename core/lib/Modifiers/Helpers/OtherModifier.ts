import { AttrBuilder } from '../../AttrBuilder';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface OtherModifierProps {
	overlay?: boolean;
	clipped?: boolean;
	radiusless?: boolean;
	shadowless?: boolean;
	unselectable?: boolean;
	invisible?: boolean;
	hidden?: boolean;
	'sr-only'?: boolean;
	relative?: boolean;
}

export const AddOtherModifierProps = <P extends OtherModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'clipped'),
	...AttrBuilder<P, A>(props, 'hidden'),
	...AttrBuilder<P, A>(props, 'invisible'),
	...AttrBuilder<P, A>(props, 'overlay'),
	...AttrBuilder<P, A>(props, 'radiusless'),
	...AttrBuilder<P, A>(props, 'relative'),
	...AttrBuilder<P, A>(props, 'sr-only'),
	...AttrBuilder<P, A>(props, 'shadowless'),
	...AttrBuilder<P, A>(props, 'unselectable')
});
