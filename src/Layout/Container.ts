import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface ContainerProps extends ModifierProps {
	fluid?: boolean;
	fullhd?: boolean;
	widescreen?: boolean;
}

export interface ContainerAttribs {
}

export const Container = ElementBuilder<ContainerProps, ContainerAttribs>('container', {
	classes: (props: ContainerProps) => ({
		['is-fluid']: !!props.fluid,
		['is-fullhd']: !!props.fullhd,
		['is-widescreen']: !!props.widescreen
	})
});
