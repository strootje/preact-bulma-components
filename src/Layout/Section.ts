import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

interface SectionProps extends ModifierProps {
}

export default BuildElement<SectionProps>('section', {
	render: 'section'
});
