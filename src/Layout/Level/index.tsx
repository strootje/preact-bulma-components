import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';
import LevelItem from './Item';
import LevelLeft from './Left';
import LevelRight from './Right';

interface LevelProps extends ModifierProps {
}

export default function Level(props: RenderableProps<LevelProps>) {
	const className = ClassNames('level', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}

// Set subitems within main item
Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;
