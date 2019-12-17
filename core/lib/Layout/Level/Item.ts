import { AttrBuilder } from "../../AttrBuilder";
import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface LevelItemProps extends ModifierProps {
	centered?: boolean;
}

export const LevelItem = ComponentBuilder<LevelItemProps, ModifierAttribs>('level-item', {
	classes: props => ({
		...AttrBuilder<LevelItemProps, ModifierAttribs>(props, 'centered', 'has-text')
	})
});
