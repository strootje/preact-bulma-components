import { expect, use } from 'chai';
import { h } from 'preact';
import Box from '../../src/Elements/Box';

describe('The <Box> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.box`', () => {
		expect(
			<Box />
		).to.eql(
			<div class='box'></div>
		);
	});

	it('should render to a <div> with classname `.box` and it\'s child', () => {
		expect(
			<Box>
				<p>I am a child</p>
			</Box>
		).to.eql(
			<div class='box'>
				<p>I am a child</p>
			</div>
		);
	});

});
