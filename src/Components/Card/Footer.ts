import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterProps extends ModifierProps {
}

export interface CardFooterAttribs {
}

export const CardFooter = ElementBuilder<CardFooterProps, CardFooterAttribs>('card-footer', {
	render: 'footer'
});
