import { Colors } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface NotificationProps extends ModifierProps {
	color?: Colors;
}

export interface NotificationAttribs {
}

export const Notification = ElementBuilder<NotificationProps, NotificationAttribs>('notification', {
	classes: (props) => ({
		[`is-${props.color}`]: !!props.color
	})
});
