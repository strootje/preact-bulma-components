import { expect, use } from 'chai';
import { h } from 'preact';
import Column from '../../src/Columns/Column';

describe('The <Column> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.column`', () => {
		expect(
			<Column />
		).to.eql(
			<div class='column'></div>
		);
	});

	it('should render to a <div> with a child and classname `.column`', () => {
		expect(
			<Column>
				<p>I am a paragraph</p>
			</Column>
		).to.eql(
			<div class='column'>
				<p>I am a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with it\'s children and classname `.column`', () => {
		expect(
			<Column>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</Column>
		).to.eql(
			<div class='column'>
				<p>I am a paragraph</p>
				<p>I am also a paragraph</p>
			</div>
		);
	});

	it('should render to a <div> with added classname `.is-full` when the size attribute is set to `full`', () => {
		expect(
			<Column size='full' />
		).to.eql(
			<div class='column is-full'></div>
		);
	});

	it('should render to a <div> with added classname `.is-full-desktop` when the size attribute is set to `{ desktop: full }`', () => {
		expect(
			<Column size={{ desktop: 'full' }} />
		).to.eql(
			<div class='column is-full-desktop'></div>
		);
	});

	it('should render to a <div> with added classname `.is-full-desktop` and `.is-one-third` when the size attribute is set to `{ desktop: full, fallback: one-third }`', () => {
		expect(
			<Column size={{ desktop: 'full', fallback: 'one-third' }} />
		).to.eql(
			<div class='column is-full-desktop is-one-third'></div>
		);
	});

	it('should render to a <div> with added classname `.is-offset-half` when the size attribute is set to `half`', () => {
		expect(
			<Column offset='half' />
		).to.eql(
			<div class='column is-offset-half'></div>
		);
	});

	it('should render to a <div> with added classname `.is-offset-half-desktop` when the size attribute is set to `{ desktop: half }`', () => {
		expect(
			<Column offset={{ desktop: 'half' }} />
		).to.eql(
			<div class='column is-offset-half-desktop'></div>
		);
	});

	it('should render to a <div> with added classname `.is-offset-half-desktop` and `.is-offset-one-third`'
		+ 'when the size attribute is set to `{ desktop: half, fallback: one-third }`', () => {
		expect(
			<Column offset={{ desktop: 'half', fallback: 'one-third' }} />
		).to.eql(
			<div class='column is-offset-half-desktop is-offset-one-third'></div>
		);
	});

	it('should render to a <div> with added classname `.is-narrow` when the narrow attribute is set to `true`', () => {
		expect(
			<Column narrow={true} />
		).to.eql(
			<div class='column is-narrow'></div>
		);
	});

	it('should render to a <div> with added classname `.is-narrow-desktop` when the narrow attribute is set to `{ desktop: true }`', () => {
		expect(
			<Column narrow={{ desktop: true }} />
		).to.eql(
			<div class='column is-narrow-desktop'></div>
		);
	});

	// TODO: this is a weird scenario
	it('(TODO) should render to a <div> with added classname `.is-narrow-desktop` and `.is-narrow` when the narrow attribute is set to `{ desktop: true, fallback: true }`', () => {
		expect(
			<Column narrow={{ desktop: true, fallback: true }} />
		).to.eql(
			<div class='column is-narrow-desktop is-narrow'></div>
		);
	});

});
