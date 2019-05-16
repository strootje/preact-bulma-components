import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface HeroHeaderProps extends ModifierProps {
}

export interface HeroHeaderAttribs {
}

export const HeroHeader = ElementBuilder<HeroHeaderProps, HeroHeaderAttribs>('hero-head');
