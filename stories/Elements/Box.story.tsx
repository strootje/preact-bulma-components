import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Box from './../../src/Elements/Box';

storiesOf('Elements/Box', module)
.add('Simple', () => (
	<Box>Hello, World!</Box>
));
