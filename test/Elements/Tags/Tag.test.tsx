import { expect, use } from 'chai';
import { h } from 'preact';
import { Tag } from '../../../src/Elements/Tags/Tag';

describe('The <Tag> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <span> with classname `.tag`', () => {
		expect(
			<Tag />
		).to.eql(
			<span class='tag'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `is-rounded`', () => {
		expect(
			<Tag rounded />
		).to.eql(
			<span class='tag is-rounded'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `.is-dark`', () => {
		expect(
			<Tag color='dark' />
		).to.eql(
			<span class='tag is-dark'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `.is-delete`', () => {
		expect(
			<Tag delete />
		).to.eql(
			<span class='tag is-delete'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `.is-normal`', () => {
		expect(
			<Tag size='normal' />
		).to.eql(
			<span class='tag is-normal'></span>
		);
	});

});
