import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface HeroBodyProps extends ModifierProps {
}

export const HeroBody = BuildElement<HeroBodyProps>('hero-body');
