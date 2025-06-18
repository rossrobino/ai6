import type { RunToolApprovalItem } from "@openai/agents";

export const Approvals = ({
	interruptions,
}: {
	interruptions: RunToolApprovalItem[];
}) => {
	return (
		<>
			<p>The following actions require approval:</p>

			<div class="mb-4 grid gap-2">
				{interruptions.map((interruption) => (
					<Approval interruption={interruption} />
				))}
			</div>

			<button>Send</button>
		</>
	);
};

const Approval = ({ interruption }: { interruption: RunToolApprovalItem }) => {
	return (
		<div class="flex items-center gap-3" aria-label="approval">
			<label class="flex items-center gap-2">
				<input
					type="checkbox"
					name="approval"
					value={JSON.stringify(interruption)}
				/>
				<div class="badge secondary font-mono font-light">
					{interruption.rawItem.name}
				</div>
			</label>
		</div>
	);
};
