import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardContentProps extends ModifierProps {
}

const CardContent = BuildElement<CardContentProps>('card-content', {
});

export default CardContent;
