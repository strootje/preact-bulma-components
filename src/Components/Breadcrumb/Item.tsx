import { h } from 'preact';
import BuildElement from '../../BuildElement';
import Icon from '../../Elements/Icon';
import { ModifierProps } from '../../Modifiers';

interface ItemProps extends ModifierProps {
	href?: string;
	icon?: string;
}

export default BuildElement<ItemProps>('', {
	addAttributes: (props) => ({
		['href']: props.href || '#'
	}),

	render: (className, { href, ...attribs }, { children, icon }) => (
		<li class={className} {...attribs}>
			{icon && <Icon size='small'>{icon}</Icon>}
			<a href={href}>{children}</a>
		</li>
	)
});
