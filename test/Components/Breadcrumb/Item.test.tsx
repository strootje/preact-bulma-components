import { expect, use } from 'chai';
import { h } from 'preact';
import BreadcrumbItem from '../../../src/Components/Breadcrumb/Item';

describe('The <BreadcrumbItem> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <li> without classname', () => {
		expect(
			<BreadcrumbItem>Home</BreadcrumbItem>
		).to.eql(
			<li><a href='#'>Home</a></li>
		);
	});

	it('should render to a <li> without classname with href set to `/home`', () => {
		expect(
			<BreadcrumbItem href='/home'>Home</BreadcrumbItem>
		).to.eql(
			<li><a href='/home'>Home</a></li>
		);
	});

	it('should render to a <li> without classname with href set to `/home`', () => {
		expect(
			<BreadcrumbItem icon='fas fa-lock'>Home</BreadcrumbItem>
		).to.eql(
			<li>
				<span class='icon is-small'><i class='fas fa-lock'></i></span>
				<a href='#'>Home</a>
			</li>
		);
	});

});
