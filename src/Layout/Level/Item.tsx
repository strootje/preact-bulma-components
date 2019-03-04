import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface LevelItemProps extends ModifierProps {
}

export default function LevelItem(props: RenderableProps<LevelItemProps>) {
	const className = ClassNames('level-item', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
