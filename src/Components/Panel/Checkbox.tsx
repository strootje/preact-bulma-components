import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { addBaseClasses, PanelBlockProps } from './Block';

export interface PanelCheckboxProps extends PanelBlockProps {
	checked?: boolean;
}

export const PanelCheckbox = BuildElement<PanelCheckboxProps>('panel-block', {
	addAttributes: (props) => ({
		[`checked`]: !!props.checked
	}),

	addClasses: addBaseClasses,

	render: (className, attribs, { checked, children }) => (
		<label class={className} {...attribs}>
			<input type='checkbox' aria-checked={checked} />
			{children}
		</label>
	)
});
