import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Pagination from '../../src/Components/Pagination';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Pagination', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Pagination {...ModifierKnobs()}>
		<Pagination.Next>Next</Pagination.Next>
		<Pagination.Previous disabled>Previous</Pagination.Previous>
		<Pagination.List>
			<Pagination.Link>1</Pagination.Link>
			<Pagination.Ellipsis />
			<Pagination.Link>20</Pagination.Link>
			<Pagination.Link current>21</Pagination.Link>
			<Pagination.Link>22</Pagination.Link>
			<Pagination.Ellipsis />
			<Pagination.Link>50</Pagination.Link>
		</Pagination.List>
	</Pagination>
));
