import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface LevelItemProps extends ModifierProps {
}

export const LevelItem = BuildElement<LevelItemProps>('level-item');
