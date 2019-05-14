import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderProps extends ModifierProps {
}

export const CardHeader = BuildElement<CardHeaderProps>('card-header', {
	render: 'header'
});
