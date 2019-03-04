import { expect, use } from 'chai';
import { h } from 'preact';
import MediaRight from '../../../src/Layout/Media/Right';

describe('The <MediaRight> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.media-right`', () => {
		expect(
			<MediaRight />
		).to.eql(
			<div class='media-right'></div>
		);
	});

});
