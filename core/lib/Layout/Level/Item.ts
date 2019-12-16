import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { PropBuilder } from "../../PropBuilder";

export interface LevelItemProps extends ModifierProps {
	centered?: boolean;
}

export const LevelItem = ElementBuilder<LevelItemProps, ModifierAttribs>('level-item', {
	classes: props => ({
		...PropBuilder(props.centered, 'has-text-centered')
	})
});
