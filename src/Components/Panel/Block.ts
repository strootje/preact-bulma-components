import BuildElement from '../../BuildElement';
import { ListOfClasses } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';

export interface PanelBlockProps extends ModifierProps {
	active?: boolean;
}

export const addBaseClasses = (props: PanelBlockProps): ListOfClasses => ({
	[`is-active`]: !!props.active
});

export default BuildElement('panel-block', {
	addClasses: addBaseClasses,
	render: 'div'
});
