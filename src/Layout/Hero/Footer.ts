import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface HeroFooterProps extends ModifierProps {
}

export interface HeroFooterAttribs {
}

export const HeroFooter = ElementBuilder<HeroFooterProps, HeroFooterAttribs>('hero-foot');
