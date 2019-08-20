import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface DropdownDividerProps extends ModifierProps {
}

export interface DropdownDividerAttribs {
}

export const DropdownDivider = ElementBuilder<DropdownDividerProps, DropdownDividerAttribs>('dropdown-divider', {
	render: 'hr'
});
