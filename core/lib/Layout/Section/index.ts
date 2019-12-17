import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { Component } from "../../Types/Preact";

export interface SectionProps extends ModifierProps {
}

export const Section = (ComponentBuilder<SectionProps, ModifierAttribs>('section', {
	render: 'section'
}) as Component<SectionProps, ModifierAttribs> & {
});
