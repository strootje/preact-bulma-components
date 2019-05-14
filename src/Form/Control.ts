import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface ControlProps extends ModifierProps {
	loading?: boolean;
}

export default BuildElement<ControlProps>('control', {
	addClasses: (props) => ({
		[`is-loading`]: !!props.loading
	})
});
