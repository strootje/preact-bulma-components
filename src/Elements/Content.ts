import { OtherSizes } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface ContentProps extends ModifierProps {
	size?: OtherSizes;
}

export interface ContentAttribs {
}

export const Content = ElementBuilder<ContentProps, ContentAttribs>('content', {
	classes: (props) => ({
		[`is-${props.size}`]: !!props.size
	})
});
