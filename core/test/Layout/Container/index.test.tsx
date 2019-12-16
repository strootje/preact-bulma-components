import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import { h } from 'preact';
import JsxPlugin from 'preact-jsx-chai';
import { Container } from '../../../lib/Layout/Container';

describe('<Container />', () => {
	use(JsxPlugin);

	it('Should render with `.container` when no props are set', () => {
		expect(
			<Container />
		).to.equal(
			<div class='container'></div>
		);
	});

	it('Should render with `.container .is-fluid` when prop `fluid` is set to `true`', () => {
		expect(
			<Container fluid />
		).to.equal(
			<div class='container is-fluid'></div>
		);
	});

	it('Should render with `.container .is-widescreen` when prop `widescreen` is set to `true`', () => {
		expect(
			<Container widescreen />
		).to.equal(
			<div class='container is-widescreen'></div>
		);
	});

	it('Should render with `.container .is-fullhd` when prop `fullhd` is set to `true`', () => {
		expect(
			<Container fullhd />
		).to.equal(
			<div class='container is-fullhd'></div>
		);
	});
});
