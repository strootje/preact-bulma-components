import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableBodyProps extends ModifierProps {
}

export const TableBody = BuildElement<TableBodyProps>('', {
	render: 'tbody'
});
