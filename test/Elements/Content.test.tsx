import { expect, use } from 'chai';
import { h } from 'preact';
import Content from '../../src/Elements/Content';

describe('The <Content> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.content`', () => {
		expect(
			<Content />
		).to.eql(
			<div class='content'></div>
		);
	});

	it('should render to a <div> with classname `.content` and it\'s child', () => {
		expect(
			<Content>
				<p>I am a child</p>
			</Content>
		).to.eql(
			<div class='content'>
				<p>I am a child</p>
			</div>
		);
	});

});
