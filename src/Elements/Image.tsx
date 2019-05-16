import { h } from 'preact';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

type ImageFixedSize = '16x16' | '24x214' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
type ImageReponsiveSize = 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3';
type ImageSize = ImageFixedSize | ImageReponsiveSize;

export interface ImageProps extends ModifierProps {
	src: string;
	size?: ImageSize;
	rounded?: boolean;
	caption?: string;
}

export interface ImageAttribs {
}

export const Image = ElementBuilder<ImageProps, ImageAttribs>('image', {
	classes: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { src, caption, rounded }) => {
		const imgProps: {
			class?: string;
			alt?: string;
			role?: 'presentation'
		} = {};

		if (!!rounded) {
			imgProps.class = 'rounded';
		}

		if (!!caption) {
			imgProps.alt = caption;
		} else {
			imgProps.role = 'presentation';
		}

		return (
			<figure class={className} {...attribs}>
				<img src={src} {...imgProps} />
				{caption && <figcaption>{caption}</figcaption>}
			</figure>
		);
	}
});
