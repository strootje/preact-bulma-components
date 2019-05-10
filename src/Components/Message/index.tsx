import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ColorsExtra, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import Body from './Body';
import Header from './Header';

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
			{header && <Header size={size}>
				{header}
			</Header>}

			<Body>
				{children}
			</Body>
		</article>
	)
}) as (FunctionalComponent<RenderableProps<MessageProps>> & {
});

export default Message;
