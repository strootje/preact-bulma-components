import BuildElement from '../BuildElement';
import { OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

export interface ContentProps extends ModifierProps {
	size?: OtherSizes;
}

export const Content = BuildElement<ContentProps>('content', {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	})
});
