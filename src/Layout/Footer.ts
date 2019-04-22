import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

interface FooterProps extends ModifierProps {
}

export default BuildElement<FooterProps>('footer', {
	render: 'footer'
});
