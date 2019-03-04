import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface LevelLeftProps extends ModifierProps {
}

export default function LevelLeft(props: RenderableProps<LevelLeftProps>) {
	const className = ClassNames('level-left', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
