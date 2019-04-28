import { expect, use } from 'chai';
import { h } from 'preact';
import CardHeader from '../../../src/Components/Card/Header';

describe('The <CardHeader> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.card-header`', () => {
		expect(
			<CardHeader />
		).to.eql(
			<header class='card-header' />
		);
	});

});
