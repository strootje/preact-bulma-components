import BuildElement from '../../BuildElement';
import { AddNavbarItemClasses, NavbarItemProps } from './Item';

interface NavbarLinkItemProps extends NavbarItemProps {
	href?: string;
}

export default BuildElement<NavbarLinkItemProps>('navbar-item', {
	addAttributes: (props) => ({
		['href']: props.href
	}),

	addClasses: AddNavbarItemClasses,
	render: 'a'
});
