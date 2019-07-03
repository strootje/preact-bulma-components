import { OtherSizes } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface ContentProps extends ModifierProps {
	size?: OtherSizes;
}

export interface ContentAttribs {
	dangerouslySetInnerHTML?: { __html: string };
	html?: string;
}

export const Content = ElementBuilder<ContentProps, ContentAttribs>('content', {
	attribs: (props) => ({
		[`dangerouslySetInnerHTML`]: !!props.html ? { __html: props.html } : props.dangerouslySetInnerHTML
	}),

	classes: (props) => ({
		[`is-${props.size}`]: !!props.size
	})
});
