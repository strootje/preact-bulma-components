import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterItemProps extends ModifierProps {
}

export interface CardFooterItemAttribs {
}

export const CardFooterItem = ElementBuilder<CardFooterItemProps, CardFooterItemAttribs>('card-footer-item', {
	render: 'p'
});
