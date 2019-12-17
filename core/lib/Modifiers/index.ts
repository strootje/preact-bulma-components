import { ListOfAttribs, ListOfClasses, Props } from "../Types/Preact";
import { AddFloatModifierProps, FloatModifierProps } from "./Helpers/FloatModifier";
import { AddOtherModifierProps, OtherModifierProps } from "./Helpers/OtherModifier";
import { AddSpacingModifierProps, SpacingModifierProps } from "./Helpers/SpacingModifier";
import { AddDisplayModifierProps, DisplayModifierProps } from "./Responsive/DisplayModifier";
import { AddSizeModifierProps, SizeModifierProps } from "./Syntax/SizeModifier";
import { AddStateModifierAttribs, AddStateModifierProps, StateModifierAttribs, StateModifierProps } from "./Syntax/StateModifier";
import { AddAlignmentModifierProps, AlignmentModifierProps } from "./Typography/AlignmentModifier";
import { AddColorModifierProps, ColorModifierProps } from "./Typography/ColorModifier";
import { AddFamilyModifierProps, FamilyModifierProps } from "./Typography/FamilyModifier";
import { AddFontSizeModifierProps, FontSizeModifierProps } from "./Typography/FontSizeModifier";
import { AddTransformationModifierProps, TransformationModifierProps } from "./Typography/TransformationModifier";
import { AddWeightModifierProps, WeightModifierProps } from "./Typography/WeightModifier";

export interface ModifierProps extends
	// Helpers
	FloatModifierProps,
	OtherModifierProps,
	SpacingModifierProps,

	// Responsive
	DisplayModifierProps,

	// Syntax
	SizeModifierProps,
	StateModifierProps,

	// Typography
	AlignmentModifierProps,
	ColorModifierProps,
	FamilyModifierProps,
	FontSizeModifierProps,
	TransformationModifierProps,
	WeightModifierProps {
}

export interface ModifierAttribs extends
	// Syntax
	StateModifierAttribs {
}

export const AddModifierProps = <P extends ModifierProps, A extends ModifierAttribs>(props: Props<P, A>): ListOfClasses => ({
	// Helpers
	...AddFloatModifierProps<P, A>(props),
	...AddOtherModifierProps<P, A>(props),
	...AddSpacingModifierProps<P, A>(props),

	// Responsive
	...AddDisplayModifierProps<P, A>(props),

	// Syntax
	...AddSizeModifierProps<P, A>(props),
	...AddStateModifierProps<P, A>(props),

	// Typography
	...AddAlignmentModifierProps<P, A>(props),
	...AddColorModifierProps<P, A>(props),
	...AddFamilyModifierProps<P, A>(props),
	...AddFontSizeModifierProps<P, A>(props),
	...AddTransformationModifierProps<P, A>(props),
	...AddWeightModifierProps<P, A>(props)
});

export const AddModifierAttribs = <P extends ModifierProps, A extends ModifierAttribs, E extends EventTarget>(props: Props<P, A>): ListOfAttribs<A, E> => ({
	// Syntax
	...AddStateModifierAttribs<P, A, E>(props)
});
