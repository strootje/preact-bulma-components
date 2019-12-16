import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Media } from '../../../lib/Layout/Media';

describe('<Media.Left />', () => {
	use(JsxPlugin);

	it('Should render with `.media-left` when no props are set', () => {
		expect(
			<Media.Left />
		).to.equal(
			<figure class='media-left'>
				<p class='image is-64x64'></p>
			</figure>
		);
	});

	it('Should render with `.media-left .is-96x96` when prop `icon-size` is set to `96x96`', () => {
		expect(
			<Media.Left icon-size="96x96" />
		).to.equal(
			<figure class='media-left'>
				<p class='image is-96x96'></p>
			</figure>
		);
	});
});
