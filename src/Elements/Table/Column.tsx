import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableColumnProps extends ModifierProps {
	heading?: boolean;
}

export default BuildElement<TableColumnProps>('', {
	render: (className, attribs, { children, heading }) => (
		!!heading ? <th class={className} {...attribs}>{children}</th> : <td class={className} {...attribs}>{children}</td>
	)
});
