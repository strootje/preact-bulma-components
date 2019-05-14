import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface FooterProps extends ModifierProps {
}

export const Footer = BuildElement<FooterProps>('footer', {
	render: 'footer'
});
