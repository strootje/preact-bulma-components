import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterItemProps extends ModifierProps {
}

export const CardFooterItem = BuildElement<CardFooterItemProps>('card-footer-item', {
	render: 'p'
});
