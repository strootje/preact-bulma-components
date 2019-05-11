import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PanelTabProps extends ModifierProps {
	active?: boolean;
}

export default BuildElement<PanelTabProps>('', {
	addClasses: (props) => ({
		[`is-active`]: !!props.active
	}),

	render: 'a'
});
