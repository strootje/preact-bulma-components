import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderProps extends ModifierProps {
}

export default BuildElement<CardHeaderProps>('card-header', {
	render: 'header'
});
