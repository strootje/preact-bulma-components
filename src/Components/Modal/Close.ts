import BuildElement from '../../BuildElement';

export interface ModalCloseProps {
}

export default BuildElement<ModalCloseProps>('modal-close', {
	addAttributes: () => ({
		[`aria-label`]: 'close'
	}),

	addClasses: () => ({
		[`is-large`]: true
	}),

	render: 'button'
});
