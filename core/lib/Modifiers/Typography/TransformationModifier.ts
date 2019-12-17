import { AttrBuilder } from '../../AttrBuilder';
import { TextTransformations } from '../../Types/Bulma';
import { ListOfClasses, Props } from '../../Types/Preact';

export interface TransformationModifierProps {
	transform?: TextTransformations;
}

export const AddTransformationModifierProps = <P extends TransformationModifierProps, A>(props: Props<P, A>): ListOfClasses => ({
	...AttrBuilder<P, A>(props, 'transform')
});
