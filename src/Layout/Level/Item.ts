import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface LevelItemProps extends ModifierProps {
}

export interface LevelItemAttribs {
}

export const LevelItem = ElementBuilder<LevelItemProps, LevelItemAttribs>('level-item');
