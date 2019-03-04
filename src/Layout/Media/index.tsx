import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';
import MediaContent from './Content';
import MediaLeft from './Left';
import MediaRight from './Right';

interface MediaProps extends ModifierProps {
}

export default function Media(props: RenderableProps<MediaProps>) {
	const className = ClassNames('media', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}

// Set subitems within main item
Media.Content = MediaContent;
Media.Left = MediaLeft;
Media.Right = MediaRight;
