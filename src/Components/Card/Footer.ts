import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterProps extends ModifierProps {
}

export const CardFooter = BuildElement<CardFooterProps>('card-footer', {
	render: 'footer'
});
