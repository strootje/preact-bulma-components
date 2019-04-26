import { expect, use } from 'chai';
import { h } from 'preact';
import Tabs from '../../../src/Components/Tabs';

describe('The <Tabs> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.tabs`', () => {
		expect(
			<Tabs />
		).to.eql(
			<div class='tabs'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-left` when `align` is set to `left`', () => {
		expect(
			<Tabs align='left' />
		).to.eql(
			<div class='tabs is-left'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-boxed` when `boxed` is set', () => {
		expect(
			<Tabs boxed />
		).to.eql(
			<div class='tabs is-boxed'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-boxed` when `fullwidth` is set', () => {
		expect(
			<Tabs fullwidth />
		).to.eql(
			<div class='tabs is-fullwidth'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-boxed` when `rounded` is set', () => {
		expect(
			<Tabs rounded />
		).to.eql(
			<div class='tabs is-rounded'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-small`', () => {
		expect(
			<Tabs size='small' />
		).to.eql(
			<div class='tabs is-small'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-boxed` when `toggle` is set', () => {
		expect(
			<Tabs toggle />
		).to.eql(
			<div class='tabs is-toggle'>
				<ul />
			</div>
		);
	});

});
