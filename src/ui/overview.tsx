import { html } from "@/content/info.md";
import { Popover } from "@/ui/popover";
import * as svg from "@/ui/svg";
import * as ovr from "ovr";

export const Overview = () => (
	<Popover title="Overview" trigger={{ children: svg.Info }}>
		<div class="grid gap-6">
			<div>{new ovr.Chunk(html, true)}</div>
			<open-agents />
		</div>
	</Popover>
);
