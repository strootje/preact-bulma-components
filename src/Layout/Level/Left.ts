import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface LevelLeftProps extends ModifierProps {
}

export const LevelLeft = BuildElement<LevelLeftProps>('level-left');
