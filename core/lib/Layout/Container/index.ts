import { ElementBuilder } from "../../ElementBuilder";
import { ModifierProps } from "../../Modifiers";
import { PropBuilder } from "../../PropBuilder";

export interface ContainerProps extends ModifierProps {
	fluid?: boolean;
	widescreen?: boolean;
	fullhd?: boolean;
}

export const Container = ElementBuilder<ContainerProps>('container', {
	classes: props => ({
		...PropBuilder(props.fluid, 'is-fluid'),
		...PropBuilder(props.widescreen, 'is-widescreen'),
		...PropBuilder(props.fullhd, 'is-fullhd')
	})
});
