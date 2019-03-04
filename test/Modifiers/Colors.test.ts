import { assert as Assert } from 'chai';
import { AddColorModifierClasses, ColorModifierProps } from '../../src/Modifiers/Color';

describe('The `Colors` Modifier Helper', () => {

	it('should return the `has-text-black` class when the `text-color` attribute is set to `black`', () => {
		// Arrange
		const props: ColorModifierProps = {
			'text-color': 'black'
		};

		// Act
		const classes = AddColorModifierClasses(props);

		// Arrange
		Assert.containsAllKeys(classes, {
			'has-text-black': true
		});
	});

});
