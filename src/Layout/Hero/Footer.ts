import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface HeroFooterProps extends ModifierProps {
}

export const HeroFooter = BuildElement<HeroFooterProps>('hero-foot');
