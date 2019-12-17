import { AttrBuilder } from "../../AttrBuilder";
import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { Component } from "../../Types/Preact";
import { LevelItem, LevelItemProps } from "./Item";
import { LevelLeft, LevelLeftProps } from "./Left";
import { LevelRight, LevelRightProps } from "./Right";

export interface LevelProps extends ModifierProps {
	mobile?: boolean;
}

export const Level = (ComponentBuilder<LevelProps, ModifierAttribs>('level', {
	classes: props => ({
		...AttrBuilder<LevelProps, ModifierAttribs>(props, 'mobile')
	})
}) as Component<LevelProps, ModifierAttribs> & {
	Item: Component<LevelItemProps, ModifierAttribs>;
	Left: Component<LevelLeftProps, ModifierAttribs>;
	Right: Component<LevelRightProps, ModifierAttribs>;
});

Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;
