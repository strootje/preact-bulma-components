import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import LevelItem from './Item';
import LevelLeft from './Left';
import LevelRight from './Right';

interface LevelProps extends ModifierProps {
}

// TODO: Eliminate Left & Right by checking stuff on the Item
// Example: `<Item side='left'>asdasd</Item>` should render inside the level-left div
const Level = BuildElement<LevelProps>('level') as (FunctionalComponent<RenderableProps<LevelProps>> & {
	[_ in 'Item' | 'Left' | 'Right']: FunctionalComponent<any>;
});

// Set subitems within main item
export default Level;
Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;
