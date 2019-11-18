import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { Icon } from '../../Elements/Icon';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderIconProps extends ModifierProps {
	children: string;
}

export interface CardHeaderIconAttribs {

}

export const CardHeaderIcon = ElementBuilder<CardHeaderIconProps, CardHeaderIconAttribs>('card-header-icon', {
	render: (className, attribs, { children }) => (
		// tslint:disable-next-line: react-a11y-anchors
		<a class={className} {...attribs}>
			<Icon>{children}</Icon>
		</a>
	)
});
