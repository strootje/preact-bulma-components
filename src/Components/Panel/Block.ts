import { ListOfClasses } from '../../Bulma';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PanelBlockProps extends ModifierProps {
	active?: boolean;
}

export interface PanelBlockAttribs {
}

export const addBaseClasses = (props: PanelBlockProps): ListOfClasses => ({
	[`is-active`]: !!props.active
});

export const PanelBlock = ElementBuilder<PanelBlockProps, PanelBlockAttribs>('panel-block', {
	classes: addBaseClasses,
	render: 'div'
});
