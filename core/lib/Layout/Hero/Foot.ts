import { ElementBuilder } from '../../ElementBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';

export interface HeroFootProps extends ModifierProps {
}

export const HeroFoot = ElementBuilder<HeroFootProps, ModifierAttribs>('hero-foot');
