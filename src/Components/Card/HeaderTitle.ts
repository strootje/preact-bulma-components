import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface CardHeaderTitleProps extends ModifierProps {
}

export default BuildElement<CardHeaderTitleProps>('card-header-title', {
	render: 'p'
});
