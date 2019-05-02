import { expect, use } from 'chai';
import { h } from 'preact';
import Delete from '../../src/Elements/Delete';

describe('The <Delete> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <a> with classname `.delete`', () => {
		expect(
			<Delete />
		).to.eql(
			<a class='delete'></a>
		);
	});

	it('should render to a <a> with classname `.delete` and it\'s child', () => {
		expect(
			<Delete>
				<p>I am a child</p>
			</Delete>
		).to.eql(
			<a class='delete'>
				<p>I am a child</p>
			</a>
		);
	});

});
