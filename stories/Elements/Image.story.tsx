import { storiesOf } from '@storybook/preact';
import { h } from 'preact';
import Image from '../../src/Elements/Image';

storiesOf('Elements/Image', module)
.add('Simple', () => (
	<Image src='http://placekitten.com/g/200/300' />
))
.add('With Caption', () => (
	<Image src='http://placekitten.com/g/200/300' caption='Hoi Maaike!' />
));
