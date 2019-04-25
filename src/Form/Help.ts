import BuildElement from '../BuildElement';
import { Colors } from '../Bulma';
import { ModifierProps } from '../Modifiers';

interface LabelProps extends ModifierProps {
	color?: Colors;
}

export default BuildElement<LabelProps>('help', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color
	}),

	render: 'p'
});
