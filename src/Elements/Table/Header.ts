import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableHeaderProps extends ModifierProps {
}

export const TableHeader = BuildElement<TableHeaderProps>('', {
	render: 'thead'
});
