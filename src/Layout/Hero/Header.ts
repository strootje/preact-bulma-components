import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface HeroHeaderProps extends ModifierProps {
}

export const HeroHeader = BuildElement<HeroHeaderProps>('hero-head');
