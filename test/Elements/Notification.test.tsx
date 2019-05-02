import { expect, use } from 'chai';
import { h } from 'preact';
import Notification from '../../src/Elements/Notification';

describe('The <Notification> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.notification`', () => {
		expect(
			<Notification>Error</Notification>
		).to.eql(
			<div class='notification'>Error</div>
		);
	});

	it('should render to a <div> with classname `.notification` with color `.danger`', () => {
		expect(
			<Notification color='danger'>Error</Notification>
		).to.eql(
			<div class='notification is-danger'>Error</div>
		);
	});

});
