import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Breadcrumb } from '../../src/Components/Breadcrumb';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Breadcrumb', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Breadcrumb {...ModifierKnobs()}>
		<Breadcrumb.Item onClick={action('clicked item 1')}>{text('item1', 'Item 1')}</Breadcrumb.Item>
		<Breadcrumb.Item onClick={action('clicked item 2')}>{text('item2', 'Item 2')}</Breadcrumb.Item>
	</Breadcrumb>
));
