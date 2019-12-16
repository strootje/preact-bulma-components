import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddColorModifierProps, ColorModifierProps } from '../../../lib/Modifiers/Typography/ColorModifier';

describe('AddColorModifierProps', () => {
	it('Should add `.has-background-black` when prop `background-color` is set to `black`', () => {
		// Arrange
		const props: ColorModifierProps = {
			'background-color': 'black'
		};

		// Act
		const classes = AddColorModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-background-black']: true
		});
	});

	it('Should add `.has-text-info` when prop `text-color` is set to `info`', () => {
		// Arrange
		const props: ColorModifierProps = {
			'text-color': 'info'
		};

		// Act
		const classes = AddColorModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-text-info']: true
		});
	});

	it('Should add `.has-background-black .has-text-gray` when prop `background-color` is set to `black` and the prop `text-color` is set to `gray`', () => {
		// Arrange
		const props: ColorModifierProps = {
			'background-color': 'black',
			'text-color': 'gray'
		};

		// Act
		const classes = AddColorModifierProps(props);

		// Assert
		expect(classes).to.contain({
			['has-background-black']: true,
			['has-text-gray']: true
		});
	});
});
