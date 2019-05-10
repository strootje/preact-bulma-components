import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import Background from './Background';
import Close from './Close';
import Content from './Content';

export interface ModalProps extends ModifierProps {
	active?: boolean;
}

const Modal = BuildElement<ModalProps>('modal', {
	addClasses: (props) => ({
		[`is-active`]: !!props.active
	}),

	render: (className, attribs, { children }) => (
		<div class={className} {...attribs}>
			<Background />
			<Close />

			<Content>
				{children}
			</Content>
		</div>
	)
}) as (FunctionalComponent<RenderableProps<ModalProps>> & {
});

export default Modal;
