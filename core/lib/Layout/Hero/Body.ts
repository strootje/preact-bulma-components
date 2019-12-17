import { ElementBuilder } from '../../ElementBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';

export interface HeroBodyProps extends ModifierProps {
}

export const HeroBody = ElementBuilder<HeroBodyProps, ModifierAttribs>('hero-body');
