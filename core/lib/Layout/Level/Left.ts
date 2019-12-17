import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface LevelLeftProps extends ModifierProps {
}

export const LevelLeft = ComponentBuilder<LevelLeftProps, ModifierAttribs>('level-left');
