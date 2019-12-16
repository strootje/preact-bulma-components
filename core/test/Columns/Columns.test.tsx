import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Columns } from '../../lib/Columns/Columns';

describe('<Columns />', () => {
	use(JsxPlugin);

	it('Should render with `.columns` when no props are set', () => {
		expect(
			<Columns />
		).to.equal(
			<div class='columns'></div>
		);
	});

	it('Should render with `.columns .is-centered` when prop `centered` is set to `true`', () => {
		expect(
			<Columns centered />
		).to.equal(
			<div class='columns is-centered'></div>
		);
	});

	it('Should render with `.columns .is-centered` when prop `centered` is set to `horizontal`', () => {
		expect(
			<Columns centered='horizontal' />
		).to.equal(
			<div class='columns is-centered'></div>
		);
	});

	it('Should render with `.columns .is-vcentered` when prop `centered` is set to `vertical`', () => {
		expect(
			<Columns centered='vertical' />
		).to.equal(
			<div class='columns is-vcentered'></div>
		);
	});

	it('Should render with `.columns .is-centered .is-vcentered` when prop `centered` is set to `both`', () => {
		expect(
			<Columns centered='both' />
		).to.equal(
			<div class='columns is-centered is-vcentered'></div>
		);
	});

	it('Should render with `.columns .is-variable .is-1` when prop `gap` is set to `1`', () => {
		expect(
			<Columns gap='1' />
		).to.equal(
			<div class='columns is-variable is-1'></div>
		);
	});

	it('Should render with `.columns .is-variable .is-1-fullhd .is-0-desktop` when prop `gap.fullhd` is set to `1` and `gap.desktop` is set to `0`', () => {
		expect(
			<Columns gap={{ fullhd: '1', desktop: '0' }} />
		).to.equal(
			<div class='columns is-variable is-1-fullhd is-0-desktop'></div>
		);
	});
});
