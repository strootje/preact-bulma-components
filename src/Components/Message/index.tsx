import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ColorsExtra, OtherSizes } from '../../Bulma';
import Delete from '../../Elements/Delete';
import { ModifierProps } from '../../Modifiers';

export interface MessageProps extends ModifierProps {
	color?: ColorsExtra;
	header?: string;
	size?: OtherSizes;
}

const Message = BuildElement<MessageProps>('message', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { children, header, size }) => (
		<article class={className} {...attribs}>
			{header && <div class='message-header'>
				<p>{header}</p>
				<Delete size={size} />
			</div>}

			<div class='message-body'>
				{children}
			</div>
		</article>
	)
}) as (FunctionalComponent<RenderableProps<MessageProps>> & {
});

export default Message;
