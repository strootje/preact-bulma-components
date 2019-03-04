import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface MediaRightProps extends ModifierProps {
}

export default function MediaRight(props: RenderableProps<MediaRightProps>) {
	const className = ClassNames('media-right', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
