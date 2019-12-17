import { ComponentBuilder } from '../../ComponentBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';

export interface HeroBodyProps extends ModifierProps {
}

export const HeroBody = ComponentBuilder<HeroBodyProps, ModifierAttribs>('hero-body');
