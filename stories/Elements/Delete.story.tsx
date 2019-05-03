import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Delete from '../../src/Elements/Delete';

storiesOf('Elements/Delete', module)
.add('Simple', () => (
	<Delete />
));
