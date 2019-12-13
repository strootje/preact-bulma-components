import { ListOfClasses } from "../Types/Preact";
import { AddFloatModifierProps, FloatModifierProps } from "./Helpers/FloatModifier";
import { AddSpacingModifierProps, SpacingModifierProps } from "./Helpers/SpacingModifier";
import { AddDisplayModifierProps, DisplayModifierProps } from "./Responsive/DisplayModifier";
import { AddAlignmentModifierProps, AlignmentModifierProps } from "./Typography/AlignmentModifier";
import { AddColorModifierProps, ColorModifierProps } from "./Typography/ColorModifier";
import { AddFamilyModifierProps, FamilyModifierProps } from "./Typography/FamilyModifier";
import { AddSizeModifierProps, SizeModifierProps } from "./Typography/SizeModifier";
import { AddTransformationModifierProps, TransformationModifierProps } from "./Typography/TransformationModifier";
import { AddWeightModifierProps, WeightModifierProps } from "./Typography/WeightModifier";
import { OtherModifierProps, AddOtherModifierProps } from "./Helpers/OtherModifier";

export interface ModifierProps extends
	FloatModifierProps,
	OtherModifierProps,
	SpacingModifierProps,
	DisplayModifierProps,
	AlignmentModifierProps,
	ColorModifierProps,
	FamilyModifierProps,
	SizeModifierProps,
	TransformationModifierProps,
	WeightModifierProps {
}

export const AddModifierProps = <P extends ModifierProps>(props: P): ListOfClasses => ({
	...AddFloatModifierProps<P>(props),
	...AddOtherModifierProps<P>(props),
	...AddSpacingModifierProps<P>(props),
	...AddDisplayModifierProps<P>(props),
	...AddAlignmentModifierProps<P>(props),
	...AddColorModifierProps<P>(props),
	...AddFamilyModifierProps<P>(props),
	...AddSizeModifierProps<P>(props),
	...AddTransformationModifierProps<P>(props),
	...AddWeightModifierProps<P>(props)
});
