import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { Icon } from '../../Elements/Icon';
import { ModifierProps } from '../../Modifiers';

export interface BreadcrumbItemProps extends ModifierProps {
	href?: string;
	icon?: string;
	active?: boolean;
}

export interface BreadcrumbItemAttribs {
	href?: string;
}

export const BreadcrumbItem = ElementBuilder<BreadcrumbItemProps, BreadcrumbItemAttribs>({
	attribs: (props) => ({
		['href']: props.href
	}),

	classes: (props) => ({
		['is-active']: !!props.active
	}),

	render: (className, { href, ...attribs }, { children, icon }) => (
		<li class={className} {...attribs}>
			{icon && <Icon size='small'>{icon}</Icon>}
			<a href={href}>{children}</a>
		</li>
	)
});
