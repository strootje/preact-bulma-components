import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Column } from '../../lib/Columns/Column';

describe('<Row.Column />', () => {
	use(JsxPlugin);

	it('Should render with `.column` when no props are set', () => {
		expect(
			<Column />
		).to.equal(
			<div class='column'></div>
		);
	});

	it('Should render with `.column .is-narrow` when prop `narrow` is set to `true`', () => {
		expect(
			<Column narrow />
		).to.equal(
			<div class='column is-narrow'></div>
		);
	});

	it('Should render with `.column .is-narrow-fullhd` when prop `narrow` is set to `fullhd`', () => {
		expect(
			<Column narrow='fullhd' />
		).to.equal(
			<div class='column is-narrow-fullhd'></div>
		);
	});

	it('Should render with `.column .is-offset-2` when prop `offset` is set to `2`', () => {
		expect(
			<Column offset='2' />
		).to.equal(
			<div class='column is-offset-2'></div>
		);
	});
});
