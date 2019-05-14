import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { ModalBackground } from './Background';
import { ModalClose } from './Close';
import { ModalContent } from './Content';

export interface ModalProps extends ModifierProps {
	active?: boolean;
}

export const Modal = BuildElement<ModalProps>('modal', {
	addClasses: (props) => ({
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
});
