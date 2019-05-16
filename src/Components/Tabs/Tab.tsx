import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TabProps extends ModifierProps {
	icon?: string;
}

export interface TabAttribs {
	href?: string;
}

export const Tab = ElementBuilder<TabProps, TabAttribs>({
	attribs: (props) => ({
		['href']: props.href
	}),

	render: (className, { href, ...attribs }, { children, icon }) => (
		<li class={className} {...attribs}>
			{icon && <span class='icon is-small'><i class={icon} aria-hidden='true'></i></span>}
			<a href={href}>{children}</a>
		</li>
	)
});
