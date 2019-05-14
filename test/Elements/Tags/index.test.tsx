import { expect, use } from 'chai';
import { h } from 'preact';
import { Tags } from '../../../src/Elements/Tags';

describe('The <Tags> Component', () => {
	use(require('preact-jsx-chai').default);

	it('should render to a <div> with classname `.tags`', () => {
		expect(
			<Tags />
		).to.eql(
			<div class='tags'></div>
		);
	});

	it('should render to a <div> with classname `.tags` and `.has-addons`', () => {
		expect(
			<Tags addons />
		).to.eql(
			<div class='tags has-addons'></div>
		);
	});

	it('should render a full tag list', () => {
		expect(
			<Tags>
				<Tags.Tag>test</Tags.Tag>
				<Tags.Tag rounded>buzz</Tags.Tag>
				<Tags.Tag>hype</Tags.Tag>
			</Tags>
		).to.eql(
			<div class='tags'>
				<span class='tag'>test</span>
				<span class='tag is-rounded'>buzz</span>
				<span class='tag'>hype</span>
			</div>
		);
	});

});
