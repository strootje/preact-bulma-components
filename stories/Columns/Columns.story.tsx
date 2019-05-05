import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Columns from '../../src/Columns';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Columns/Columns', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<div>
		<Columns {...ModifierKnobs()}>
			<Columns.Column size='11'>11</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='10'>10</Columns.Column>
			<Columns.Column size='5'>2</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='9'>9</Columns.Column>
			<Columns.Column size='3'>3</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='8'>8</Columns.Column>
			<Columns.Column size='4'>4</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='7'>7</Columns.Column>
			<Columns.Column size='5'>5</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='6'>6</Columns.Column>
			<Columns.Column size='6'>6</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='5'>5</Columns.Column>
			<Columns.Column size='7'>7</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='4'>4</Columns.Column>
			<Columns.Column size='8'>8</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='3'>3</Columns.Column>
			<Columns.Column size='9'>9</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='2'>2</Columns.Column>
			<Columns.Column size='10'>10</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='11'>11</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
			<Columns.Column size='1'>1</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='2'>2</Columns.Column>
			<Columns.Column size='2'>2</Columns.Column>
			<Columns.Column size='2'>2</Columns.Column>
			<Columns.Column size='2'>2</Columns.Column>
			<Columns.Column size='2'>2</Columns.Column>
			<Columns.Column size='2'>2</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='3'>3</Columns.Column>
			<Columns.Column size='3'>3</Columns.Column>
			<Columns.Column size='3'>3</Columns.Column>
			<Columns.Column size='3'>3</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='4'>4</Columns.Column>
			<Columns.Column size='4'>4</Columns.Column>
			<Columns.Column size='4'>4</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='6'>6</Columns.Column>
			<Columns.Column size='6'>6</Columns.Column>
		</Columns>

		<Columns {...ModifierKnobs()}>
			<Columns.Column size='12'>12</Columns.Column>
		</Columns>
	</div>
));
