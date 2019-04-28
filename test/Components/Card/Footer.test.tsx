import { expect, use } from 'chai';
import { h } from 'preact';
import CardFooter from '../../../src/Components/Card/Footer';

describe('The <CardFooter> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.card-footer`', () => {
		expect(
			<CardFooter />
		).to.eql(
			<footer class='card-footer' />
		);
	});

});
