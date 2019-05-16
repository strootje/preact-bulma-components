import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface FooterProps extends ModifierProps {
}

export interface FooterAttribs {
}

export const Footer = ElementBuilder<FooterProps, FooterAttribs>('footer', {
	render: 'footer'
});
