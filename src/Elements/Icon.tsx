import { h } from 'preact';
import BuildElement from '../BuildElement';
import { OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

interface IconProps extends ModifierProps {
	children: string;
	size?: OtherSizes;
}

export default BuildElement<IconProps>('icon', {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attribs, { children }) => (
		<span class={className} {...attribs}>
			<i class={typeof children === 'string' ? children : children.toString()}></i>
		</span>
	)
});
