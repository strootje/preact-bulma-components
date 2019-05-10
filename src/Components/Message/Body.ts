import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MessageBodyProps extends ModifierProps {
}

export default BuildElement<MessageBodyProps>('message-body');
