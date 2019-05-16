import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface LevelRightProps extends ModifierProps {
}

export interface LevelRightAttribs {
}

export const LevelRight = ElementBuilder<LevelRightProps, LevelRightAttribs>('level-right');
