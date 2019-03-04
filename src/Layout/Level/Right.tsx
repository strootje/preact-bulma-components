import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface LevelRightProps extends ModifierProps {
}

export default function LevelRight(props: RenderableProps<LevelRightProps>) {
	const className = ClassNames('level-right', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
