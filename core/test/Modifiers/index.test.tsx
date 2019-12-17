import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { ComponentBuilder } from '../../lib/ComponentBuilder';
import { ModifierAttribs, ModifierProps } from '../../lib/Modifiers';

const TestComponent = ComponentBuilder<ModifierProps, ModifierAttribs>({});

describe('<TestComponent />', () => {
	use(JsxPlugin);

	it('Should add nothing when no props are passed', () => {
		expect(
			<TestComponent />
		).to.equal(
			<div></div>
		)
	});

	it('Should add `.is-block` when prop `display` is set to `block`', () => {
		expect(
			<TestComponent display="block" />
		).to.equal(
			<div class="is-block"></div>
		)
	});

	it('Should add `.is-size-2` when prop `font-size` is set to `2`', () => {
		expect(
			<TestComponent font-size="2" />
		).to.equal(
			<div class="is-size-2"></div>
		)
	});

	it('Should add `.has-text-left` when prop `align` is set to `left`', () => {
		expect(
			<TestComponent align="left" />
		).to.equal(
			<div class="has-text-left"></div>
		)
	});

	it('Should add `.is-large` when prop `elem-size` is set to `large`', () => {
		expect(
			<TestComponent size="large" />
		).to.equal(
			<div class="is-large"></div>
		)
	});

	it('Should add `.is-unselectable .has-text-weight-semibold` when prop `weight` is set to `semibold` and `unselectable` is set to `true`', () => {
		expect(
			<TestComponent weight="semibold" unselectable />
		).to.equal(
			<div class="is-unselectable has-text-weight-semibold"></div>
		)
	});

	it('Should add `.is-sr-only [disabled]` when prop `screenreader` is set to `true` and attrib `disabled` is set to `true`', () => {
		expect(
			<TestComponent sr-only disabled />
		).to.equal(
			<div class="is-sr-only" disabled></div>
		)
	});
});
