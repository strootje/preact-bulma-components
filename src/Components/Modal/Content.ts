import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface ModalContentProps extends ModifierProps {
}

export interface ModalContentAttribs {
}

export const ModalContent = ElementBuilder<ModalContentProps, ModalContentAttribs>('modal-content');
