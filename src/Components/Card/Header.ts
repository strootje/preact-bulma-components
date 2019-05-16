import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderProps extends ModifierProps {
}

export interface CardHeaderAttribs {
}

export const CardHeader = ElementBuilder<CardHeaderProps, CardHeaderAttribs>('card-header', {
	render: 'header'
});
