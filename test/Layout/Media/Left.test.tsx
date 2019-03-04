import { expect, use } from 'chai';
import { h } from 'preact';
import MediaLeft from '../../../src/Layout/Media/Left';

describe('The <MediaLeft> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.media-left`', () => {
		expect(
			<MediaLeft />
		).to.eql(
			<div class='media-left'></div>
		);
	});

});
