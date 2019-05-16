import { h } from 'preact';
import { ColorsExtra, OtherSizes } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { MessageBody, MessageBodyAttribs, MessageBodyProps } from './Body';
import { MessageHeader, MessageHeaderAttribs, MessageHeaderProps } from './Header';
export { MessageBody, MessageBodyAttribs, MessageBodyProps } from './Body';
export { MessageHeader, MessageHeaderAttribs, MessageHeaderProps } from './Header';

export interface MessageProps extends ModifierProps {
	color?: ColorsExtra;
	header?: string;
	size?: OtherSizes;
}

export interface MessageAttribs {
}

export const Message = ElementBuilder<MessageProps, MessageAttribs>('message', {
	classes: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { children, header, size }) => (
		<article class={className} {...attribs}>
			{header && <MessageHeader size={size}>
				{header}
			</MessageHeader>}

			<MessageBody>
				{children}
			</MessageBody>
		</article>
	)
}) as (Component<MessageProps, MessageAttribs> & {
	Body: Component<MessageBodyProps, MessageBodyAttribs>;
	Header: Component<MessageHeaderProps, MessageHeaderAttribs>;
});

Message.Body = MessageBody;
Message.Header = MessageHeader;
