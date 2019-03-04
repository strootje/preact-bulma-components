import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface MediaLeftProps extends ModifierProps {
}

export default function MediaLeft(props: RenderableProps<MediaLeftProps>) {
	const className = ClassNames('media-left', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
