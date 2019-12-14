import { ComponentProps, ListOfAttribs, ListOfClasses } from "../Types/Preact";
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
	EventTarget,

	// Syntax
	StateModifierAttribs {
}

export const AddModifierProps = <P extends ModifierProps>(props: P): ListOfClasses => ({
	// Helpers
	...AddFloatModifierProps<P>(props),
	...AddOtherModifierProps<P>(props),
	...AddSpacingModifierProps<P>(props),

	// Responsive
	...AddDisplayModifierProps<P>(props),

	// Syntax
	...AddSizeModifierProps<P>(props),
	...AddStateModifierProps<P>(props),

	// Typography
	...AddAlignmentModifierProps<P>(props),
	...AddColorModifierProps<P>(props),
	...AddFamilyModifierProps<P>(props),
	...AddFontSizeModifierProps<P>(props),
	...AddTransformationModifierProps<P>(props),
	...AddWeightModifierProps<P>(props)
});

export const AddModifierAttribs = <P extends ModifierProps, A extends ModifierAttribs>(props: ComponentProps<P, A>): ListOfAttribs<A> => ({
	// Syntax
	...AddStateModifierAttribs<P, A>(props)
});
