import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface SectionProps extends ModifierProps {
}

export interface SectionAttribs {
}

export const Section = ElementBuilder<SectionProps, SectionAttribs>('section', {
	render: 'section'
});
