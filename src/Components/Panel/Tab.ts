import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PanelTabProps extends ModifierProps {
	active?: boolean;
}

export interface PanelTabAttribs {
}

export const PanelTab = ElementBuilder<PanelTabProps, PanelTabAttribs>({
	classes: (props) => ({
		[`is-active`]: !!props.active
	}),

	render: 'a'
});
