import { expect, use } from 'chai';
import { h } from 'preact';
import Media from '../../../src/Layout/Media';

describe('The <Media> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.media`', () => {
		expect(
			<Media />
		).to.eql(
			<div class='media'></div>
		);
	});

	it('should render a complete Media', () => {
		expect(
			<Media>
				<Media.Left>
					Hello, MediaLeft!
				</Media.Left>

				<Media.Content>
					Hello, MediaContent!
				</Media.Content>

				<Media.Right>
					Hello, MediaRight!
				</Media.Right>
			</Media>
		).to.eql(
			<div class='media'>
				<div class='media-left'>
					Hello, MediaLeft!
				</div>

				<div class='media-content'>
					Hello, MediaContent!
				</div>

				<div class='media-right'>
					Hello, MediaRight!
				</div>
			</div>
		);
	});

});
