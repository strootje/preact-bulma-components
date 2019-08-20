import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PanelHeaderProps extends ModifierProps {
}

export interface PanelHeaderAttribs {
}

export const PanelHeader = ElementBuilder<PanelHeaderProps, PanelHeaderAttribs>('panel-heading', {
	render: 'p'
});
