import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { Component } from "../../Types/Preact";

export interface TileProps extends ModifierProps {
}

export const Tile = (ComponentBuilder<TileProps, ModifierAttribs>('tile', {
}) as Component<TileProps, ModifierAttribs> & {
});
