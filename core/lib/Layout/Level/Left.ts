import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface LevelLeftProps extends ModifierProps {
}

export const LevelLeft = ElementBuilder<LevelLeftProps, ModifierAttribs>('level-left');
