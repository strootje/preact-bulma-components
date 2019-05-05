import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Card from '../../src/Components/Card';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Card', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Card {...ModifierKnobs()}>
		<Card.Header>
			<Card.HeaderIcon>fas fa-lock</Card.HeaderIcon>
			<Card.HeaderTitle>test</Card.HeaderTitle>
		</Card.Header>

		<Card.Content>
			<p>test</p>
		</Card.Content>

		<Card.Footer>
			<Card.FooterItem>
				<span>this is one</span>
			</Card.FooterItem>

			<Card.FooterItem>
				<span>this is two</span>
			</Card.FooterItem>
		</Card.Footer>
	</Card>
));
