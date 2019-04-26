import { expect, use } from 'chai';
import { h } from 'preact';
import TabsTab from '../../../src/Components/Tabs/Tab';

describe('The <TabsTab> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <li> without classname', () => {
		expect(
			<TabsTab>Home</TabsTab>
		).to.eql(
			<li><a href='#'>Home</a></li>
		);
	});

	it('should render to a <li> without classname with href set to `/home`', () => {
		expect(
			<TabsTab href='/home'>Home</TabsTab>
		).to.eql(
			<li><a href='/home'>Home</a></li>
		);
	});

	it('should render to a <li> without classname with an icon set', () => {
		expect(
			<TabsTab icon='fas fa-lock'>Home</TabsTab>
		).to.eql(
			<li>
				<span class='icon is-small'><i class='fas fa-lock' aria-hidden='true'></i></span>
				<a href='#'>Home</a>
			</li>
		);
	});

});
