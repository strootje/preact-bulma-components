import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableBodyProps extends ModifierProps {
}

export default BuildElement<TableBodyProps>('', {
	render: 'tbody'
});
