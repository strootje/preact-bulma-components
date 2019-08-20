import { ElementBuilder } from '../../ElementBuilder';

export interface ModalCloseProps {
}

export interface ModalCloseAttribs {
	'aria-label'?: string;
}

export const ModalClose = ElementBuilder<ModalCloseProps, ModalCloseAttribs>('modal-close', {
	attribs: () => ({
		[`aria-label`]: 'close'
	}),

	classes: () => ({
		[`is-large`]: true
	}),

	render: 'button'
});
