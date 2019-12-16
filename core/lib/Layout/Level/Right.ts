import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface LevelRightProps extends ModifierProps {
}

export const LevelRight = ElementBuilder<LevelRightProps, ModifierAttribs>('level-right');
