import { expect, use } from 'chai';
import { h } from 'preact';
import CardContent from '../../../src/Components/Card/Content';

describe('The <CardContent> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.card-content`', () => {
		expect(
			<CardContent />
		).to.eql(
			<div class='card-content' />
		);
	});

});
