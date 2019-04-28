import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterItemProps extends ModifierProps {
}

const CardFooterItem = BuildElement<CardFooterItemProps>('card-footer-item', {
	render: 'p'
});

export default CardFooterItem;
