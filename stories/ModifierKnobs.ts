import { boolean, number, radios, select } from '@storybook/addon-knobs';
import { Colors, Sides } from '../src/Bulma';
import { ModifierProps } from '../src/Modifiers';
import { DisplayKind } from '../src/Modifiers/Responsive';
import { TextAlignment, TextSize } from '../src/Modifiers/Typography';

const Groups = {
	Color: 'Color Modifiers',
	Helper: 'Helper Modifiers',
	Responsive: 'Responsive Modifiers',
	Typography: 'Typography Modifiers'
};

const ColorsOptions: { [s: string]: Colors } = {
	Black: 'black',
	Danger: 'danger',
	Dark: 'dark',
	Info: 'info',
	Light: 'light',
	Link: 'link',
	Primary: 'primary',
	Success: 'success',
	Warning: 'warning',
	White: 'white'
};

const PulledOptions: { [s: string]: Sides } = {
	Left: 'left',
	Right: 'right'
};

const DisplayOptions: { [s: string]: DisplayKind } = {
	Block: 'block',
	Flex: 'flex',
	Inline: 'inline',
	InlineBlock: 'inline-block',
	InlineFlex: 'inline-flex'
};

const TextAlignOptinos: { [s: string]: TextAlignment } = {
	Centered: 'centered',
	Justified: 'justified',
	Left: 'left',
	Right: 'right'
};

export default (): ModifierProps => ({
	'background-color': select<Colors | undefined>('Background Color', ColorsOptions, undefined, Groups.Color),
	'clearfix': boolean('Clearfix', false, Groups.Helper),
	'clipped': boolean('Clipped', false, Groups.Helper),
	'display': select<DisplayKind | undefined>('Display', DisplayOptions, undefined, Groups.Responsive),
	'invisible': boolean('Invisible', false, Groups.Helper),
	'marginless': boolean('Marginless', false, Groups.Helper),
	'overlay': boolean('Overlay', false, Groups.Helper),
	'paddingless': boolean('Paddingless', false, Groups.Helper),
	'pulled': radios('Pulled', PulledOptions, undefined, Groups.Helper),
	'radiusless': boolean('No Radius', false, Groups.Helper),
	'screenreader': boolean('Screenreader Only', false, Groups.Helper),
	'shadowless': boolean('No Shadow', false, Groups.Helper),
	'text-align': radios('Text Alignment', TextAlignOptinos, undefined, Groups.Typography),
	'text-color': select<Colors | undefined>('Text Color', ColorsOptions, undefined, Groups.Color),
	'text-size': number('Text Size', 0, { min: 1, max: 7, step: 1, range: true }, Groups.Typography) as unknown as TextSize,
	'unselectable': boolean('Unselectable', false, Groups.Helper)
});

export const ColorsModifier = (name: string, initialValue?: Colors, groupId?: string) => select<Colors | undefined>(name, ColorsOptions, initialValue, groupId);
