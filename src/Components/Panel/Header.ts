import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PanelHeaderProps extends ModifierProps {
}

export const PanelHeader = BuildElement<PanelHeaderProps>('panel-heading', {
	render: 'p'
});
