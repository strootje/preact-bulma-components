import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface LabelProps extends ModifierProps {
}

export interface LabelAttribs {
	for?: string;
}

export const Label = ElementBuilder<LabelProps, LabelAttribs>('label', {
	attribs: (props) => ({
		['for']: props.for
	}),

	render: 'label'
});
