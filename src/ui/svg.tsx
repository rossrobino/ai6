import { clsx } from "clsx";
import * as ovr from "ovr";

export const Arrow = () => (
	<span class="icon-[lucide--send-horizontal] rotate-270" />
);

export const ArrowBigRight = () => (
	<span class="icon-[lucide--arrow-big-right]" />
);

export const X = () => <span class="icon-[lucide--x]" />;

export const Web = () => <span class="icon-[lucide--globe]" />;

export const Info = () => <span class="icon-[lucide--info]" />;

export const Paperclip = () => <span class="icon-[lucide--paperclip]" />;

export const Refresh = () => <span class="icon-[lucide--rotate-cw]" />;

export const Chart = (props: ovr.JSX.IntrinsicElements["span"]) => {
	const { class: className, ...rest } = props;
	return (
		<span class={clsx("icon-[lucide--chart-scatter]", className)} {...rest} />
	);
};

export const MessageDashed = (props: ovr.JSX.IntrinsicElements["span"]) => {
	const { class: className, ...rest } = props;
	return (
		<span
			class={clsx("icon-[lucide--message-circle-dashed]", className)}
			{...rest}
		/>
	);
};

export const Undo = () => <span class="icon-[lucide--undo]" />;

export const BookUser = () => <span class="icon-[lucide--book-user]" />;

export const HandHelping = () => <span class="icon-[lucide--hand-helping]" />;

export const User = () => <span class="icon-[lucide--user]" />;

export const FileCode = () => <span class="icon-[lucide--file-code]" />;

export const Chevron = () => <span class="icon-[lucide--chevron-down]" />;
