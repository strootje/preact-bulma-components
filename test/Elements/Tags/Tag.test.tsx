import { expect, use } from 'chai';
import { h } from 'preact';
import TagsTag from '../../../src/Elements/Tags/Tag';

describe('The <TagsTag> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <span> with classname `.tag`', () => {
		expect(
			<TagsTag />
		).to.eql(
			<span class='tag'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `is-rounded`', () => {
		expect(
			<TagsTag rounded />
		).to.eql(
			<span class='tag is-rounded'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `.is-dark`', () => {
		expect(
			<TagsTag color='dark' />
		).to.eql(
			<span class='tag is-dark'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `.is-delete`', () => {
		expect(
			<TagsTag delete />
		).to.eql(
			<span class='tag is-delete'></span>
		);
	});

	it('should render to a <span> with classname `.tag` and `.is-normal`', () => {
		expect(
			<TagsTag size='normal' />
		).to.eql(
			<span class='tag is-normal'></span>
		);
	});

});
