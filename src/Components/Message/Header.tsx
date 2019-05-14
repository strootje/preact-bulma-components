import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { OtherSizes } from '../../Bulma';
import { Delete } from '../../Elements/Delete';
import { ModifierProps } from '../../Modifiers';

export interface MessageHeaderProps extends ModifierProps {
	size?: OtherSizes;
}

export const MessageHeader = BuildElement<MessageHeaderProps>('message-header', {
	render: (className, attribs, { children, size }) => (
		<div class={className} {...attribs}>
			<p>{children}</p>
			<Delete size={size} />
		</div>
	)
});
