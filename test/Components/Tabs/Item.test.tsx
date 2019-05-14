import { expect, use } from 'chai';
import { h } from 'preact';
import { Tab } from '../../../src/Components/Tabs/Tab';

describe('The <Tab> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <li> without classname', () => {
		expect(
			<Tab>Home</Tab>
		).to.eql(
			<li><a>Home</a></li>
		);
	});

	it('should render to a <li> without classname with href set to `/home`', () => {
		expect(
			<Tab href='/home'>Home</Tab>
		).to.eql(
			<li><a href='/home'>Home</a></li>
		);
	});

	it('should render to a <li> without classname with an icon set', () => {
		expect(
			<Tab icon='fas fa-lock'>Home</Tab>
		).to.eql(
			<li>
				<span class='icon is-small'><i class='fas fa-lock' aria-hidden='true'></i></span>
				<a>Home</a>
			</li>
		);
	});

});
