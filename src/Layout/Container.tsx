import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../Modifiers';

interface ContainerProps extends ModifierProps {
	fluid?: boolean;
	fullhd?: boolean;
	widescreen?: boolean;
}

export default function Container(props: RenderableProps<ContainerProps>) {
	const className = ClassNames('container', {
		...AddModifierClasses(props),
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
