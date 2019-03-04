import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';

interface ContainerProps {
	fluid?: boolean;
	fullhd?: boolean;
	widescreen?: boolean;
}

export default function Container(props: RenderableProps<ContainerProps>) {
	const className = ClassNames('container', {
		['is-fluid']: !!props.fluid,
		['is-fullhd']: !!props.fullhd,
		['is-widescreen']: !!props.widescreen
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
