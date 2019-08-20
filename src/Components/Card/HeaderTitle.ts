import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderTitleProps extends ModifierProps {
}

export interface CardHeaderTitleAttribs {
}

export const CardHeaderTitle = ElementBuilder<CardHeaderTitleProps, CardHeaderTitleAttribs>('card-header-title', {
	render: 'p'
});
