import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { LevelItem, LevelItemAttribs, LevelItemProps } from './Item';
import { LevelLeft, LevelLeftAttribs, LevelLeftProps } from './Left';
import { LevelRight, LevelRightAttribs, LevelRightProps } from './Right';
export { LevelItem, LevelItemAttribs, LevelItemProps } from './Item';
export { LevelLeft, LevelLeftAttribs, LevelLeftProps } from './Left';
export { LevelRight, LevelRightAttribs, LevelRightProps } from './Right';

export interface LevelProps extends ModifierProps {
}

export interface LevelAttribs {
}

// TODO: Eliminate Left & Right by checking stuff on the Item
// Example: `<Item side='left'>asdasd</Item>` should render inside the level-left div
export const Level = ElementBuilder<LevelProps, LevelAttribs>('level') as (Component<LevelProps, LevelAttribs> & {
	Item: Component<LevelItemProps, LevelItemAttribs>;
	Left: Component<LevelLeftProps, LevelLeftAttribs>;
	Right: Component<LevelRightProps, LevelRightAttribs>;
});

Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;
