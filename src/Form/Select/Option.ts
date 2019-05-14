import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface SelectOptionProps extends ModifierProps {
	value?: any;
}

export default BuildElement<SelectOptionProps>('', {
	addAttributes: (props) => ({
		[`value`]: props.value
	}),

	render: 'option'
})
