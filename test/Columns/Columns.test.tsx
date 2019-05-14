import { expect, use } from 'chai';
import { h } from 'preact';
import { Columns } from '../../src/Columns';

describe('The <Columns> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.columns`', () => {
		expect(
			<Columns />
		).to.eql(
			<div class='columns'></div>
		);
	});

	it('should render to a <div> with a child and classname `.columns', () => {
		expect(
			<Columns>
				<p>I am a paragraph</p>
			</Columns>
		).to.eql(
			<div class='columns'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.columns`', () => {
		expect(
			<Columns>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</Columns>
		).to.eql(
			<div class='columns'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with added classname `.is-centered` when the centered attribute is set to `horizontal`', () => {
		expect(
			<Columns centered='horizontal' />
		).to.eql(
			<div class='columns is-centered'></div>
		);
	});

	it('should render to a <div> with added classname `.is-vcentered` when the centered attribute is set to `vertical`', () => {
		expect(
			<Columns centered='vertical' />
		).to.eql(
			<div class='columns is-vcentered'></div>
		);
	});

	it('should render to a <div> with added classnames `.is-centered` and `.is-vcentered` when the centered attribute is set to `both`', () => {
		expect(
			<Columns centered='both' />
		).to.eql(
			<div class='columns is-centered is-vcentered'></div>
		);
	});

	it('should render to a <div> with added classname `.is-gapless` when the gap attribute is set to `gapless`', () => {
		expect(
			<Columns gap='gapless' />
		).to.eql(
			<div class='columns is-gapless'></div>
		);
	});

	it('should render to a <div> with added classname `.is-gapless` when the gap attribute is set to `0`', () => {
		expect(
			<Columns gap='0' />
		).to.eql(
			<div class='columns is-0'></div>
		);
	});

	it('should render to a <div> with added classname `.is-gapless` when the gap attribute is set to `7`', () => {
		expect(
			<Columns gap='7' />
		).to.eql(
			<div class='columns is-7'></div>
		);
	});

	it('should render to a <div> with added classname `.is-multiline` when the multiline attribute is set to `true`', () => {
		expect(
			<Columns multiline={true} />
		).to.eql(
			<div class='columns is-multiline'></div>
		);
	});

});
