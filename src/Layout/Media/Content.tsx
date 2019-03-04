import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface MediaContentProps extends ModifierProps {
}

export default function MediaContent(props: RenderableProps<MediaContentProps>) {
	const className = ClassNames('media-content', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
