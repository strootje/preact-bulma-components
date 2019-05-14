import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { Icon } from '../../Elements/Icon';
import { addBaseClasses, PanelBlockProps } from './Block';

export interface PanelLinkProps extends PanelBlockProps {
	href?: string;
	icon?: string;
}

export const PanelLink = BuildElement<PanelLinkProps>('panel-block', {
	addAttributes: (props) => ({
		[`href`]: props.href
	}),

	addClasses: addBaseClasses,

	render: (className, attribs, { children, icon }) => (
		<a class={className} {...attribs}>
			{icon && <Icon base='panel'>{icon}</Icon>}
			{children}
		</a>
	)
});
