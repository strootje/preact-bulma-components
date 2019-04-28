import { expect, use } from 'chai';
import { h } from 'preact';
import CardHeaderIcon from '../../../src/Components/Card/HeaderIcon';

describe('The <CardHeader> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <a> with classname `.card-header-icon`', () => {
		expect(
			<CardHeaderIcon>fas fa-test</CardHeaderIcon>
		).to.eql(
			<a class='card-header-icon'>
				<span class='icon'><i class='fas fa-test'></i></span>
			</a>
		);
	});

});
