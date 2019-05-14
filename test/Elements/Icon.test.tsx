import { expect, use } from 'chai';
import { h } from 'preact';
import { Icon } from '../../src/Elements/Icon';

describe('The <Icon> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <a> with classname `.icon`', () => {
		expect(
			<Icon>fas fa-test</Icon>
		).to.eql(
			<span class='icon'><i class='fas fa-test'></i></span>
		);
	});

});
