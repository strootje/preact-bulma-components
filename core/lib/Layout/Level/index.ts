import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { PropBuilder } from "../../PropBuilder";

export interface LevelProps extends ModifierProps {
	mobile?: boolean;
}

export const Level = ElementBuilder<LevelProps, ModifierAttribs>('level', {
	classes: props => ({
		...PropBuilder(props.mobile, 'is-mobile')
	})
});
