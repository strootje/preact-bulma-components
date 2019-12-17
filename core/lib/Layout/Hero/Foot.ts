import { ComponentBuilder } from '../../ComponentBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';

export interface HeroFootProps extends ModifierProps {
}

export const HeroFoot = ComponentBuilder<HeroFootProps, ModifierAttribs>('hero-foot');
