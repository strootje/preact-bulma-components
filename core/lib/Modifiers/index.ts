import { ListOfClasses } from "../Types/Preact";
import { AddColorModifierProps, ColorModifierProps } from "./ColorModifier";
import { AddDisplayModifierProps, DisplayModifierProps } from "./DisplayModifier";

export interface ModifierProps extends
	ColorModifierProps,
	DisplayModifierProps {
};

export const AddModifierProps = <P extends ModifierProps>(props: P): ListOfClasses => ({
	...AddColorModifierProps<P>(props),
	...AddDisplayModifierProps<P>(props)
});
