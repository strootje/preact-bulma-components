import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableHeadProps extends ModifierProps {
}

export default BuildElement<TableHeadProps>('', {
	render: 'thead'
});
