import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PanelTabsProps extends ModifierProps {
}

export default BuildElement<PanelTabsProps>('panel-tabs', {
	render: 'p'
});
