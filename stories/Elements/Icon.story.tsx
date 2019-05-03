import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Icon from '../../src/Elements/Icon';

storiesOf('Elements/Icon', module)
.add('Simple', () => (
	<Icon>fas fa-lock</Icon>
));
