import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

interface ContentProps extends ModifierProps {
	bordered?: boolean;
	striped?: boolean;
	narrow?: boolean;
	hoverable?: boolean;
	fullwidth?: boolean;
}

export default BuildElement<ContentProps>('content', {
	addClasses: (props: ContentProps) => ({
		[`is-bordered`]: !!props.bordered,
		[`is-striped`]: !!props.striped,
		[`is-narrow`]: !!props.narrow,
		[`is-hoverable`]: !!props.hoverable,
		[`is-fullwidth`]: !!props.fullwidth
	})
});
