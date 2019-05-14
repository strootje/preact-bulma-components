import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MessageBodyProps extends ModifierProps {
}

export const MessageBody = BuildElement<MessageBodyProps>('message-body');
