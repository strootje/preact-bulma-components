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

	it('Should add `.is-hidden-touch` when prop `disdplay.touch` is set to `hidden`', () => {
		// Arrange
		const props: DisplayModifierProps = {
			display: {
				touch: 'hidden'
			}
		};

		// Act
		const classes = AddDisplayModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['is-hidden-touch']: true });
	});

	it('Should add `.is-hidden-touch .is-block-widescreen-only` when prop `disdplay.touch` is set to `hidden` and `display.widescreen-only` is set to `block`', () => {
		// Arrange
		const props: DisplayModifierProps = {
			display: {
				touch: 'hidden',
				'widescreen-only': 'block'
			}
		};

		// Act
		const classes = AddDisplayModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['is-hidden-touch']: true, ['is-block-widescreen-only']: true });
	});
});
