import { h } from 'preact';
import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

type ImageFixedSize = '16x16' | '24x214' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
type ImageReponsiveSize = 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3';
type ImageSize = ImageFixedSize | ImageReponsiveSize;

interface ImageProps extends ModifierProps {
	src: string;
	size?: ImageSize;
	rounded?: boolean;
	caption?: string;
}

export default BuildElement<ImageProps>('image', {
	addAttributes: (props) => ({
		['src']: props.src,
		['caption']: props.caption,
		['rounded']: `${props.rounded}`
	}),

	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, { src, caption, rounded, ...rest }) => (
		<figure class={className} {...rest}>
			<img {...rounded && `class='is-rounded'`} src={src} />
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	)
});
