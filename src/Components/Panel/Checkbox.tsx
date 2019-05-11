import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { addBaseClasses, PanelBlockProps } from './Block';

export interface PanelCheckboxProps extends PanelBlockProps {
	checked?: boolean;
}

export default BuildElement<PanelCheckboxProps>('panel-block', {
	addAttributes: (props) => ({
		[`checked`]: !!props.checked
	}),

	addClasses: addBaseClasses,

	render: (className, attribs, { children }) => (
		<label class={className} {...attribs}>
			<input type='checkbox' />
			{children}
		</label>
	)
});
