import ClassNames from 'classnames';
import { FunctionalComponent, h, RenderableProps } from 'preact';
import { ListOfAttributes, ListOfClasses } from './Bulma';
import { HtmlAttribs as addHtmlAttribs } from './HtmlAttribs';
import { AddModifierClasses, ModifierProps } from './Modifiers';

type Props<P, A = {}> = RenderableProps<(P & A)>;
export type Component<P, A = {}> = FunctionalComponent<Props<P, A>>;
type ClassListBuilder<P, A> = (props: RenderableProps<P, A>) => ListOfClasses;
type AttribListBuilder<P, A> = (props: Props<P, A>) => ListOfAttributes<A>;
type RenderComponent<P, A> = (name: string, attribs: ListOfAttributes<A>, props: (P & A)) => JSX.Element;
interface ElementBuilderOpts<P, A> {
	attribs?: AttribListBuilder<P, A>;
	classes?: ClassListBuilder<P, A>;
	render?: string | RenderComponent<P, A>;
}

export function ElementBuilder<P, A = {}>(opts: ElementBuilderOpts<P, A>): Component<P, A>;
export function ElementBuilder<P, A = {}>(name: string, opts?: ElementBuilderOpts<P, A>): Component<P, A>;
export function ElementBuilder<P, A = {}>(name: (string | ElementBuilderOpts<P, A>), opts?: ElementBuilderOpts<P, A>): Component<P, A> {
	if (typeof name === 'string') {
		return elementBuilder(name, opts || {});
	} else {
		return elementBuilder('', name || {});
	}
}

const elementBuilder = <P extends ModifierProps, A = {}>(name: string, opts: ElementBuilderOpts<P, A>): Component<P, A> => {
	const addAttribs = opts.attribs || (() => ({}));
	const addClasses = opts.classes || (() => ({}));
	const render = opts.render || 'div';

	return (props: Props<P, A>): JSX.Element => {
		const className = ClassNames(name, {
			...AddModifierClasses(props),
			...addClasses(props)
		});

		const attribs: ListOfAttributes<(A & JSX.DOMAttributes)> = {
			...addHtmlAttribs(this, props),
			...addAttribs(props)
		};

		if (typeof render === 'string') {
			return h(render, { children: props.children, class: className, ...attribs });
		} else {
			return render(className, attribs, props);
		}
	};
};
