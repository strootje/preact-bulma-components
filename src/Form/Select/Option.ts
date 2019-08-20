import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface SelectOptionProps extends ModifierProps {
}

export interface SelectOptionAttribs {
	value?: any;
}

export const SelectOption = ElementBuilder<SelectOptionProps, SelectOptionAttribs>({
	attribs: (props) => ({
		['value']: props.value
	}),

	render: 'option'
});
