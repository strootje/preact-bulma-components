import { h } from 'preact';
import { OtherSizes } from '../../Bulma';
import { ElementBuilder } from '../../ElementBuilder';
import { Delete } from '../../Elements/Delete';
import { ModifierProps } from '../../Modifiers';

export interface MessageHeaderProps extends ModifierProps {
	size?: OtherSizes;
}

export interface MessageHeaderAttribs {
}

export const MessageHeader = ElementBuilder<MessageHeaderProps, MessageHeaderAttribs>('message-header', {
	render: (className, attribs, { children, size }) => (
		<div class={className} {...attribs}>
			<p>{children}</p>
			<Delete size={size} />
		</div>
	)
});
