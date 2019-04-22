import BuildElement from '../BuildElement';
import { OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

interface ContentProps extends ModifierProps {
	size?: OtherSizes;
}

export default BuildElement<ContentProps>('delete', {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),
	render: 'a'
});
