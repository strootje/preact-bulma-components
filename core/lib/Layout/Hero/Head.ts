import { ElementBuilder } from '../../ElementBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';

export interface HeroHeadProps extends ModifierProps {
}

export const HeroHead = ElementBuilder<HeroHeadProps, ModifierAttribs>('hero-head');
