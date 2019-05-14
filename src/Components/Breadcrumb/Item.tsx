import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { Icon } from '../../Elements/Icon';
import { ModifierProps } from '../../Modifiers';

export interface BreadcrumbItemProps extends ModifierProps {
	href?: string;
	icon?: string;
	active?: boolean;
}

export const BreadcrumbItem = BuildElement<BreadcrumbItemProps>('', {
	addAttributes: (props) => ({
		['href']: props.href
	}),

	addClasses: (props) => ({
		['is-active']: !!props.active
	}),

	render: (className, { href, onClick, ...attribs }, { children, icon }) => (
		<li class={className} {...attribs}>
			{icon && <Icon size='small'>{icon}</Icon>}
			<a href={href} onClick={onClick}>{children}</a>
		</li>
	)
});
