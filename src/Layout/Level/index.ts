import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import LevelItem, { LevelItemProps } from './Item';
import LevelLeft, { LevelLeftProps } from './Left';
import LevelRight, { LevelRightProps } from './Right';

interface LevelProps extends ModifierProps {
}

// TODO: Eliminate Left & Right by checking stuff on the Item
// Example: `<Item side='left'>asdasd</Item>` should render inside the level-left div
const Level = BuildElement<LevelProps>('level') as (FunctionalComponent<RenderableProps<LevelProps>> & {
	Item: FunctionalComponent<RenderableProps<LevelItemProps>>;
	Left: FunctionalComponent<RenderableProps<LevelLeftProps>>;
	Right: FunctionalComponent<RenderableProps<LevelRightProps>>;
});

// Set subitems within main item
export default Level;
Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;
