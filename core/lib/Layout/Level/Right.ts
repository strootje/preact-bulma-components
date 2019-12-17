import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface LevelRightProps extends ModifierProps {
}

export const LevelRight = ComponentBuilder<LevelRightProps, ModifierAttribs>('level-right');
