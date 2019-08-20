import { expect, use } from 'chai';
import { h } from 'preact';
import { CardHeaderTitle } from '../../../src/Components/Card/HeaderTitle';

describe('The <CardHeader> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <p> with classname `.card-header-title`', () => {
		expect(
			<CardHeaderTitle />
		).to.eql(
			<p class='card-header-title' />
		);
	});

});
