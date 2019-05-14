import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PanelTabProps extends ModifierProps {
	active?: boolean;
}

export const PanelTab = BuildElement<PanelTabProps>('', {
	addClasses: (props) => ({
		[`is-active`]: !!props.active
	}),

	render: 'a'
});
