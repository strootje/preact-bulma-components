import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableFootProps extends ModifierProps {
}

export default BuildElement<TableFootProps>('', {
	render: 'tfoot'
});
