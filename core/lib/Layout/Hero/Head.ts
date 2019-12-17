import { ComponentBuilder } from '../../ComponentBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';

export interface HeroHeadProps extends ModifierProps {
}

export const HeroHead = ComponentBuilder<HeroHeadProps, ModifierAttribs>('hero-head');
