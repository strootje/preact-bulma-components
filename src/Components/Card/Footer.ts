import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterProps extends ModifierProps {
}

const CardFooter = BuildElement<CardFooterProps>('card-footer', {
	render: 'footer'
});

export default CardFooter;
