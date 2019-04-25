import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

interface LabelProps extends ModifierProps {
	for?: string;
}

export default BuildElement<LabelProps>('label', {
	addAttributes: (props) => ({
		['for']: props.for
	}),

	render: 'label'
});
