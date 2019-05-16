import { h } from 'preact';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { ModalBackground, ModalBackgroundAttribs, ModalBackgroundProps } from './Background';
import { ModalClose, ModalCloseAttribs, ModalCloseProps } from './Close';
import { ModalContent, ModalContentAttribs, ModalContentProps } from './Content';
export { ModalBackground, ModalBackgroundAttribs, ModalBackgroundProps } from './Background';
export { ModalClose, ModalCloseAttribs, ModalCloseProps } from './Close';
export { ModalContent, ModalContentAttribs, ModalContentProps } from './Content';

export interface ModalProps extends ModifierProps {
	active?: boolean;
}

export interface ModalAttribs {
}

export const Modal = ElementBuilder<ModalProps, ModalAttribs>('modal', {
	classes: (props) => ({
		[`is-active`]: !!props.active
	}),

	render: (className, attribs, { children }) => (
		<div class={className} {...attribs}>
			<ModalBackground />
			<ModalClose />

			<ModalContent>
				{children}
			</ModalContent>
		</div>
	)
}) as (Component<ModalProps, ModalAttribs> & {
	Background: Component<ModalBackgroundProps, ModalBackgroundAttribs>;
	Close: Component<ModalCloseProps, ModalCloseAttribs>;
	Content: Component<ModalContentProps, ModalContentAttribs>;
});

Modal.Background = ModalBackground;
Modal.Close = ModalClose;
Modal.Content = ModalContent;
