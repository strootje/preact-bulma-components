import { AttrBuilder } from '../../AttrBuilder';
import { SizeTypes } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface SizeModifierProps {
	size?: SizeTypes;
}

export const AddSizeModifierProps = <P extends SizeModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'size')
});
