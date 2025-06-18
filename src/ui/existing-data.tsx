import type { Dataset } from "@/lib/types";
import { Table } from "@/ui/table";

export const ExistingData = (props: { dataset: Dataset }) => {
	return (
		<div class="mt-12">
			{function* () {
				if (props.dataset) {
					yield (
						<div>
							<p>{props.dataset.length} Records</p>
							<Table data={props.dataset} />
						</div>
					);
					yield (
						<input
							type="hidden"
							value={JSON.stringify(props.dataset)}
							name="existing"
						></input>
					);
				}
			}}
		</div>
	);
};
