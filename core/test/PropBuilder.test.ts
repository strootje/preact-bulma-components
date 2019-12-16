import { expect } from 'chai';
import { describe } from 'mocha';
import { PropBuilder } from '../lib/PropBuilder';

describe('PropBuilder', () => {
	it('Should add `nothing` when prop `test` is set to `nothing`', () => {
		// Arrange
		const props = {
			test: ''
		};

		// Act
		const classes = PropBuilder(props.test);

		// Assert
		expect(classes).to.be.empty;
	});

	it('Should add `.is-block` when prop `test` is set to `block`', () => {
		// Arrange
		const props = {
			test: 'block'
		};

		// Act
		const classes = PropBuilder(props.test);

		// Assert
		expect(classes).to.contain({ 'is-block': true });
	});

	it('Should add `.has-test-block` when prop `test` is set to `block` and reducer is set to `has-test`', () => {
		// Arrange
		const reducer = `has-test`;
		const props = {
			test: 'block'
		};

		// Act
		const classes = PropBuilder(props.test, reducer);

		// Assert
		expect(classes).to.contain({ 'has-test-block': true });
	});

	it('Should add `.is-block-mobile` when prop `test.mobile` is set to `block`', () => {
		// Arrange
		const props = {
			test: {
				mobile: 'block'
			}
		};

		// Act
		const classes = PropBuilder(props.test);

		// Assert
		expect(classes).to.contain({ 'is-block-mobile': true });
	});

	it('Should add `.is-flex .is-block-mobile` when prop `test.fallback` is set to `flex` and `test.mobile` is set to `block`', () => {
		// Arrange
		const props = {
			test: {
				fallback: 'flex',
				mobile: 'block'
			}
		};

		// Act
		const classes = PropBuilder(props.test);

		// Assert
		expect(classes).to.contain({ 'is-flex': true, 'is-block-mobile': true });
	});
});
