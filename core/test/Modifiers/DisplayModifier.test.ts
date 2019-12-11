import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddDisplayModifierProps, DisplayModifierProps } from "../../lib/Modifiers/DisplayModifier";

describe('AddDisplayModifierProps', () => {
	it('Should add `.is-flex` when prop `display` is set to `flex`', () => {
		// Arrange
		const props: DisplayModifierProps = {
			display: 'flex'
		};

		// Act
		const classes = AddDisplayModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['is-flex']: true });
	});

	it('Should add `.is-hidden-touch` when prop `hidden` is set to `touch`', () => {
		// Arrange
		const props: DisplayModifierProps = {
			hidden: 'touch'
		};

		// Act
		const classes = AddDisplayModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['is-hidden-touch']: true });
	});
});
