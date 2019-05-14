import BuildElement from '../BuildElement';
import { Colors } from '../Bulma';
import { ModifierProps } from '../Modifiers';

export interface NotificationProps extends ModifierProps {
	color?: Colors;
}

export const Notification = BuildElement<NotificationProps>('notification', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color
	})
});
