import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface DropdownDividerProps extends ModifierProps {
}

export const DropdownDivider = BuildElement<DropdownDividerProps>('dropdown-divider', {
	render: 'hr'
});
