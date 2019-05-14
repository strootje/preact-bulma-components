import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableFooterProps extends ModifierProps {
}

export const TableFooter = BuildElement<TableFooterProps>('', {
	render: 'tfoot'
});
