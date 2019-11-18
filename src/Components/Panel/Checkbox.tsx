import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { addBaseClasses, PanelBlockProps } from './Block';

export interface PanelCheckboxProps extends PanelBlockProps {
}

export interface PanelCheckboxAttribs {
	checked?: boolean;
}

export const PanelCheckbox = ElementBuilder<PanelCheckboxProps, PanelCheckboxAttribs>('panel-block', {
	attribs: (props) => ({
		[`checked`]: !!props.checked
	}),

	classes: addBaseClasses,

	render: (className, attribs, { checked, children }) => (
		<label class={className} {...attribs}>
			{/* tslint:disable-next-line: react-a11y-input-elements */}
			<input type='checkbox' aria-checked={checked} />
			{children}
		</label>
	)
});
