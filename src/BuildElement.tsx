import ClassNames from 'classnames';
import { FunctionalComponent, h, RenderableProps } from 'preact';
import { ListOfAttributes, ListOfClasses } from './Bulma';
import { AddModifierClasses, ModifierProps } from './Modifiers';

type AttributeListBuilder<T> = (props: RenderableProps<T>) => ListOfAttributes;
type ClassListBuilder<T> = (props: RenderableProps<T>) => ListOfClasses;
type RenderWithAttributes<T> = (className: string, attributes: ListOfAttributes, properties: RenderableProps<T>) => JSX.Element;
interface BuildElementOptions<T> {
	addAttributes?: AttributeListBuilder<T>;
	addClasses?: ClassListBuilder<T>;
	render?: string | RenderWithAttributes<T>;
}

export default function BuildElement<Props extends ModifierProps>(name: string, opts: BuildElementOptions<Props> = {}): FunctionalComponent<RenderableProps<Props>> {
	const addAttributes = opts.addAttributes || ((): ListOfAttributes => ({}));
	const addClasses = opts.addClasses || ((): ListOfClasses => ({}));
	const render = opts.render || 'div';

	return (props: RenderableProps<Props>): JSX.Element => {
		const className = ClassNames(name, {
			...AddModifierClasses(props),
			...addClasses(props)
		});

		if (typeof render === 'string') {
			return h(render, {
				children: props.children,
				class: className,
				...addAttributes(props)
			});
		} else {
			return render(className,
				addAttributes(props), props);
		}
	};
}
