import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddFontSizeModifierProps, FontSizeModifierProps } from "../../../lib/Modifiers/Typography/FontSizeModifier";

describe('AddFontSizeModifierProps', () => {
	it('Should add `.is-size-1` when prop `size` is set to `1`', () => {
		// Arrange
		const props: FontSizeModifierProps = {
			'font-size': '1'
		};

		// Act
		const classes = AddFontSizeModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-size-1']: true
		});
	});

	it('Should add `.is-size-4-touch` when prop `size.touch` is set to `4`', () => {
		// Arrange
		const props: FontSizeModifierProps = {
			'font-size': {
				touch: '4'
			}
		};

		// Act
		const classes = AddFontSizeModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-size-4-touch']: true
		});
	});

	it('Should add `.is-size-4-touch .is-size-1-fullhd` when prop `size.touch` is set to `4` and `size.fullhd` is set to `1`', () => {
		// Arrange
		const props: FontSizeModifierProps = {
			'font-size': {
				touch: '4',
				fullhd: '1'
			}
		};

		// Act
		const classes = AddFontSizeModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['is-size-4-touch']: true,
			['is-size-1-fullhd']: true
		});
	});
});
