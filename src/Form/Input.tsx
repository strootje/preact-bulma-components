import { h, RenderableProps } from 'preact';
import TextInput, { TextInputProps } from './Inputs/TextInput';

type InputProps = TextInputProps;

export default ( props: RenderableProps<InputProps> ): JSX.Element => {
	if (props.type === 'text') {
		return (<TextInput {...props} />);
	} else {
		throw new Error(`Input type '${props.type}' unsuported`);
	}
};
