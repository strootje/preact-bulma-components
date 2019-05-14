import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface ContainerProps extends ModifierProps {
	fluid?: boolean;
	fullhd?: boolean;
	widescreen?: boolean;
}

export const Container = BuildElement<ContainerProps>('container', {
	addClasses: (props: ContainerProps) => ({
		['is-fluid']: !!props.fluid,
		['is-fullhd']: !!props.fullhd,
		['is-widescreen']: !!props.widescreen
	})
});
