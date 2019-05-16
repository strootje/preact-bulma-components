import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PanelTabsProps extends ModifierProps {
}

export interface PanelTabsAttribs {
}

export const PanelTabs = ElementBuilder<PanelTabsProps, PanelTabsAttribs>('panel-tabs', {
	render: 'p'
});
