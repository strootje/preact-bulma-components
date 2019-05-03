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

	it('should render to a <div> with classname `.tabs .is-fullwidth` when `fullwidth` is set', () => {
		expect(
			<Tabs fullwidth />
		).to.eql(
			<div class='tabs is-fullwidth'>
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

	it('should render to a <div> with classname `.tabs .is-toggle` when `toggle` is set', () => {
		expect(
			<Tabs toggle />
		).to.eql(
			<div class='tabs is-toggle'>
				<ul />
			</div>
		);
	});

	it('should render to a <div> with classname `.tabs .is-toggle .is-toggle-rounded` when `toggle` is set to `rounded`', () => {
		expect(
			<Tabs toggle='rounded' />
		).to.eql(
			<div class='tabs is-toggle is-toggle-rounded'>
				<ul />
			</div>
		);
	});

	it('should render to a complete tabs element', () => {
		expect(
			<Tabs>
				<Tabs.Tab>Tab 1</Tabs.Tab>
				<Tabs.Tab>Tab 2</Tabs.Tab>
			</Tabs>
		).to.eql(
			<div class='tabs'>
				<ul>
					<li><a>Tab 1</a></li>
					<li><a>Tab 2</a></li>
				</ul>
			</div>
		);
	});

});
