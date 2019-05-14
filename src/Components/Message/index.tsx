import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ColorsExtra, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import { MessageBody } from './Body';
import { MessageHeader } from './Header';

export interface MessageProps extends ModifierProps {
	color?: ColorsExtra;
	header?: string;
	size?: OtherSizes;
}

export const Message = BuildElement<MessageProps>('message', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { children, header, size }) => (
		<article class={className} {...attribs}>
			{header && <MessageHeader size={size}>
				{header}
			</MessageHeader>}

			<MessageBody>
				{children}
			</MessageBody>
		</article>
	)
});
