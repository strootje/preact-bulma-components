import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderProps extends ModifierProps {
}

const CardHeader = BuildElement<CardHeaderProps>('card-header', {
	render: 'header'
});

export default CardHeader;
