import { expect, use } from 'chai';
import { h } from 'preact';
import MediaContent from '../../../src/Layout/Media/Content';

describe('The <MediaContent> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.media-content`', () => {
		expect(
			<MediaContent />
		).to.eql(
			<div class='media-content'></div>
		);
	});

});
