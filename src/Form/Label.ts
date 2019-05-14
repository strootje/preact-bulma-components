import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface LabelProps extends ModifierProps {
	for?: string;
}

export const Label = BuildElement<LabelProps>('label', {
	addAttributes: (props) => ({
		['for']: props.for
	}),

	render: 'label'
});
