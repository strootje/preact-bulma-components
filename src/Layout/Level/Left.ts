import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface LevelLeftProps extends ModifierProps {
}

export interface LevelLeftAttribs {
}

export const LevelLeft = ElementBuilder<LevelLeftProps, LevelLeftAttribs>('level-left');
