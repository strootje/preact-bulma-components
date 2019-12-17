import { AttrBuilder } from "../../AttrBuilder";
import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface ContainerProps extends ModifierProps {
	fluid?: boolean;
	widescreen?: boolean;
	fullhd?: boolean;
}

export const Container = ComponentBuilder<ContainerProps>('container', {
	classes: props => ({
		...AttrBuilder<ContainerProps, ModifierAttribs>(props, 'fluid'),
		...AttrBuilder<ContainerProps, ModifierAttribs>(props, 'widescreen'),
		...AttrBuilder<ContainerProps, ModifierAttribs>(props, 'fullhd')
	})
});
