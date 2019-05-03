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

// tslint:disable-next-line: max-line-length
// ['onLoad', 'onError', 'onLoadCapture', 'onCopy', 'onCopyCapture', 'onCut', 'onCutCapture', 'onPaste', 'onPasteCapture', 'onCompositionEnd', 'onCompositionEndCapture', 'onCompositionStart', 'onCompositionStartCapture', 'onCompositionUpdate', 'onCompositionUpdateCapture', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onChangeCapture', 'onInput', 'onInputCapture', 'onSearch', 'onSearchCapture', 'onSubmit', 'onSubmitCapture', 'onInvalid', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyPressCapture', 'onKeyUp', 'onKeyUpCapture', 'onAbort', 'onAbortCapture', 'onCanPlay', 'onCanPlayCapture', 'onCanPlayThrough', 'onCanPlayThroughCapture', 'onDurationChange', 'onDurationChangeCapture', 'onEmptied', 'onEmptiedCapture', 'onEncrypted', 'onEncryptedCapture', 'onEnded', 'onEndedCapture', 'onLoadedData', 'onLoadedDataCapture', 'onLoadedMetadata', 'onLoadedMetadataCapture', 'onLoadStart', 'onLoadStartCapture', 'onPause', 'onPauseCapture', 'onPlay', 'onPlayCapture', 'onPlaying', 'onPlayingCapture', 'onProgress', 'onProgressCapture', 'onRateChange', 'onRateChangeCapture', 'onSeeked', 'onSeekedCapture', 'onSeeking', 'onSeekingCapture', 'onStalled', 'onStalledCapture', 'onSuspend', 'onSuspendCapture', 'onTimeUpdate', 'onTimeUpdateCapture', 'onVolumeChange', 'onVolumeChangeCapture', 'onWaiting', 'onWaitingCapture', 'onClick', 'onClickCapture', 'onContextMenu', 'onContextMenuCapture', 'onDblClick', 'onDblClickCapture', 'onDrag', 'onDragCapture', 'onDragEnd', 'onDragEndCapture', 'onDragEnter', 'onDragEnterCapture', 'onDragExit', 'onDragExitCapture', 'onDragLeave', 'onDragLeaveCapture', 'onDragOver', 'onDragOverCapture', 'onDragStart', 'onDragStartCapture', 'onDrop', 'onDropCapture', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseEnterCapture', 'onMouseLeave', 'onMouseLeaveCapture', 'onMouseMove', 'onMouseMoveCapture', 'onMouseOut', 'onMouseOutCapture', 'onMouseOver', 'onMouseOverCapture', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onSelectCapture', 'onTouchCancel', 'onTouchCancelCapture', 'onTouchEnd', 'onTouchEndCapture', 'onTouchMove', 'onTouchMoveCapture', 'onTouchStart', 'onTouchStartCapture', 'onPointerOver', 'onPointerOverCapture', 'onPointerEnter', 'onPointerEnterCapture', 'onPointerDown', 'onPointerDownCapture', 'onPointerMove', 'onPointerMoveCapture', 'onPointerUp', 'onPointerUpCapture', 'onPointerCancel', 'onPointerCancelCapture', 'onPointerOut', 'onPointerOutCapture', 'onPointerLeave', 'onPointerLeaveCapture', 'onGotPointerCapture', 'onGotPointerCaptureCapture', 'onLostPointerCapture', 'onLostPointerCaptureCapture', 'onScroll', 'onScrollCapture', 'onWheel', 'onWheelCapture', 'onAnimationStart', 'onAnimationStartCapture', 'onAnimationEnd', 'onAnimationEndCapture', 'onAnimationIteration', 'onAnimationIterationCapture', 'onTransitionEnd', 'onTransitionEndCapture']
const AddHtmlAttribs = <T, K extends keyof T>(props: T, keys: K[]): ListOfAttributes => keys
	.map((key) => ({ [key]: props[key] }))
	.reduce((prev, cur) => ({ ...prev, ...cur }), {});

export default function BuildElement<Props extends ModifierProps>(name: string, opts: BuildElementOptions<Props> = {}): FunctionalComponent<RenderableProps<Props>> {
	const addAttributes = opts.addAttributes || ((): ListOfAttributes => ({}));
	const addClasses = opts.addClasses || ((): ListOfClasses => ({}));
	const render = opts.render || 'div';

	return (props: RenderableProps<Props & JSX.DOMAttributes>): JSX.Element => {
		const className = ClassNames(name, {
			...AddModifierClasses(props),
			...addClasses(props)
		});

		const attribs = {
			...AddHtmlAttribs(props, ['onClick']),
			...addAttributes(props)
		};

// tslint:disable-next-line: no-console
		console.log('attribs =====', attribs);

		if (typeof render === 'string') {
			return h(render, { children: props.children, class: className, ...attribs });
		} else {
			return render(className, attribs, props);
		}
	};
}
