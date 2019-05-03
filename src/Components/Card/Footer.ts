import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardFooterProps extends ModifierProps {
}

export default BuildElement<CardFooterProps>('card-footer', {
	render: 'footer'
});
