import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface CardContentProps extends ModifierProps {
}

export interface CardContentAttribs {
}

export const CardContent = ElementBuilder<CardContentProps, CardContentAttribs>('card-content', {
});
