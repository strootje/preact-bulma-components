import { h } from 'preact';
import { Colors, OtherSizes, States } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface ButtonProps extends ModifierProps {
	color?: Colors;
	fullwidth?: boolean;
	inverted?: boolean;
	outlined?: boolean;
	rounded?: boolean;
	size?: OtherSizes;
	state?: States;
}

export interface ButtonAttribs {
	href?: string;
	type?: 'submit' | 'reset';
}

export const Button = ElementBuilder<ButtonProps, ButtonAttribs>('button', {
	classes: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-inverted`]: !!props.inverted,
		[`is-fullwidth`]: !!props.fullwidth,
		[`is-outlined`]: !!props.outlined,
		[`is-rounded`]: !!props.rounded,
		[`is-${props.size}`]: !!props.size,
		[`is-${props.state}`]: !!props.state
	}),

	render: (className, attribs, { children, href }) => (
		!!href ? <a class={className} href={href} {...attribs}>{children}</a> : <button class={className} {...attribs}>{children}</button>
	)
});
