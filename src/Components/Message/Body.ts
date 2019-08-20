import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MessageBodyProps extends ModifierProps {
}

export interface MessageBodyAttribs {
}

export const MessageBody = ElementBuilder<MessageBodyProps, MessageBodyAttribs>('message-body');
