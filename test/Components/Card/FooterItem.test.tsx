import { expect, use } from 'chai';
import { h } from 'preact';
import { CardFooterItem } from '../../../src/Components/Card/FooterItem';

describe('The <CardFooter> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <p> with classname `.card-footer-item`', () => {
		expect(
			<CardFooterItem />
		).to.eql(
			<p class='card-footer-item' />
		);
	});

});
