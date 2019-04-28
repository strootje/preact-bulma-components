import { h } from 'preact';
import BuildElement from '../../BuildElement';
import Icon from '../../Elements/Icon';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderIconProps extends ModifierProps {
	children: string;
}

const CardHeaderIcon = BuildElement<CardHeaderIconProps>('card-header-icon', {
	render: (className, attribs, { children }) => (
		<a class={className} {...attribs}>
			<Icon>{children}</Icon>
		</a>
	)
});

export default CardHeaderIcon;
