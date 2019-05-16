import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface HeroBodyProps extends ModifierProps {
}

export interface HeroBodyAttribs {
}

export const HeroBody = ElementBuilder<HeroBodyProps, HeroBodyAttribs>('hero-body');
