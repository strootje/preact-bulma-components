import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PaginationPreviousProps extends ModifierProps {
	disabled?: boolean;
}

export default BuildElement<PaginationPreviousProps>('pagination-previous', {
	addAttributes: (props) => ({
		[`disabled`]: !!props.disabled
	}),

	render: 'a'
});
