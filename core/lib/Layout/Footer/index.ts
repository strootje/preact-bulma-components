import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { Component } from "../../Types/Preact";

export interface FooterProps extends ModifierProps {
}

export const Footer = (ComponentBuilder<FooterProps, ModifierAttribs>('footer', {
	render: 'footer'
}) as Component<FooterProps, ModifierAttribs> & {
});
