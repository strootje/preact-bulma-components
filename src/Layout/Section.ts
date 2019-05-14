import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface SectionProps extends ModifierProps {
}

export const Section = BuildElement<SectionProps>('section', {
	render: 'section'
});
