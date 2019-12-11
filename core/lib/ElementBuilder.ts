import ClassNames from 'classnames';
import { FunctionalComponent, h, JSX, RenderableProps, VNode } from 'preact';

type AllowedHtmlElements = keyof JSX.IntrinsicElements;
type Props<P> = RenderableProps<P>;
type Attribs<A extends EventTarget> = JSX.DOMAttributes<A> & JSX.HTMLAttributes & JSX.SVGAttributes;
type ComponentProps<P, A extends EventTarget> = Props<P> & Attribs<A>;
interface Component<P, A extends EventTarget> extends FunctionalComponent<ComponentProps<P, A>> { };

interface ListOfClasses { [_: string]: boolean; }
type ListOfAttribs<A extends EventTarget> = { [Key in keyof A]?: A[Key]; }

interface ClassListBuilder<P, A extends EventTarget> {
	(props: ComponentProps<P, A>): ListOfClasses;
}

interface AttribListBuilder<P, A extends EventTarget> {
	(props: ComponentProps<P, A>): ListOfAttribs<A>;
}

interface RenderComponent<P, A extends EventTarget> {
	(name: string, props: Props<P>, attribs: Attribs<A>): VNode<any> | null;
}

interface ElementBuilderOpts<P, A extends EventTarget> {
	attribs?: AttribListBuilder<P, A>;
	classes?: ClassListBuilder<P, A>;
	render?: AllowedHtmlElements | RenderComponent<P, A>;
}

export function ElementBuilder<P = {}, A extends EventTarget = HTMLDivElement>(opts: ElementBuilderOpts<P, A>): Component<P, A>;
export function ElementBuilder<P = {}, A extends EventTarget = HTMLDivElement>(name: string, opts?: ElementBuilderOpts<P, A>): Component<P, A>;
export function ElementBuilder<P = {}, A extends EventTarget = HTMLDivElement>(name: string | ElementBuilderOpts<P, A>, opts?: ElementBuilderOpts<P, A>): Component<P, A> {
	if (typeof name === 'string') {
		return elementBuilder(name, opts || {});
	} else {
		return elementBuilder('', name || {});
	}
}

const elementBuilder = <P, A extends EventTarget>(name: string, opts: ElementBuilderOpts<P, A>): Component<P, A> => {
	const addAttribs = opts.attribs || (() => ({}));
	const addClasses = opts.classes || (() => ({}));
	const render = opts.render || 'div';

	return (props: ComponentProps<P, A>) => {
		const className = ClassNames(name, {
			...addClasses(props)
		});

		const attribs: Attribs<A> = {
			...addAttribs(props)
		};

		if (typeof render === 'string') {
			return h(render, { class: className, children: props.children, ...attribs });
		} else {
			return render(className, props, attribs);
		}
	}
}
