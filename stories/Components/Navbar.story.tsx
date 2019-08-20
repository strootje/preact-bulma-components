import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import { Navbar } from '../../src/Components/Navbar';
import ModifierKnobs from '../ModifierKnobs';

const stories = storiesOf('Components/Navbar', module);
stories.addDecorator(withKnobs);

stories.add('Simple', () => (
	<Navbar {...ModifierKnobs()} color='primary'>
		<Navbar.Brand>
			<Navbar.Item href='https://github.com/strootje/preact-bulma-components'>
				<img />
			</Navbar.Item>

			<Navbar.Burger />
		</Navbar.Brand>

		<Navbar.Menu>
			<Navbar.Start>
				<Navbar.Dropdown label='posts'>
					<Navbar.Item href='~/posts/hello-world'>
						Hello World!
					</Navbar.Item>
				</Navbar.Dropdown>
			</Navbar.Start>

			<Navbar.End>
			</Navbar.End>
		</Navbar.Menu>
	</Navbar>
));
