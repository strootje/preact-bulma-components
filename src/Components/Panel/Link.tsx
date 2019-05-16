import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { Icon } from '../../Elements/Icon';
import { addBaseClasses, PanelBlockProps } from './Block';

export interface PanelLinkProps extends PanelBlockProps {
	icon?: string;
}

export interface PanelLinkAttribs {
	href?: string;
}

export const PanelLink = ElementBuilder<PanelLinkProps, PanelLinkAttribs>('panel-block', {
	attribs: (props) => ({
		[`href`]: props.href
	}),

	classes: addBaseClasses,

	render: (className, attribs, { children, icon }) => (
		<a class={className} {...attribs}>
			{icon && <Icon base='panel'>{icon}</Icon>}
			{children}
		</a>
	)
});
