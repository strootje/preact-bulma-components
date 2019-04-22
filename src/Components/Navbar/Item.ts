import BuildElement from '../../BuildElement';
import { ListOfClasses } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';

export interface NavbarItemProps extends ModifierProps {
	expanded?: boolean;
	tab?: boolean;
}

export function AddNavbarItemClasses(props: NavbarItemProps, classesToAdd?: ListOfClasses): ListOfClasses {
	return {
		['is-expanded']: !!props.expanded,
		['is-tab']: !!props.tab,
		...classesToAdd
	};
}

export default BuildElement<NavbarItemProps>('navbar-item', {
	addClasses: AddNavbarItemClasses
});
