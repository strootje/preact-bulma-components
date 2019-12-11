import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddColorModifierProps, ColorModifierProps } from "../../lib/Modifiers/ColorModifier";

describe('AddColorModifierProps', () => {
	it('Should add `.is-primary` when prop `color` is set to `primary`', () => {
		// Arrange
		const props: ColorModifierProps = {
			color: 'primary'
		};

		// Act
		const classes = AddColorModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['is-primary']: true });
	});

	it('Should add `.has-background-black` when prop `color` is set to `{ background: \'black\' }`', () => {
		// Arrange
		const props: ColorModifierProps = {
			color: {
				background: 'black'
			}
		};

		// Act
		const classes = AddColorModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['has-background-black']: true });
	});

	it('Should add `.has-background-black .has-text-gray` when prop `color` is set to `{ background: \'black\', text: \'gray\' }`', () => {
		// Arrange
		const props: ColorModifierProps = {
			color: {
				background: 'black',
				text: 'gray'
			}
		};

		// Act
		const classes = AddColorModifierProps(props);

		// Assert
		expect(classes).to.contain({ ['has-background-black']: true, ['has-text-gray']: true });
	});
});
