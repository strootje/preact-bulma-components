import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TabProps extends ModifierProps {
	href?: string;
	icon?: string;
}

export const Tab = BuildElement<TabProps>('', {
	addAttributes: (props) => ({
		['href']: props.href
	}),

	render: (className, { href, ...attribs }, { children, icon }) => (
		<li class={className} {...attribs}>
			{icon && <span class='icon is-small'><i class={icon} aria-hidden='true'></i></span>}
			<a href={href}>{children}</a>
		</li>
	)
});
