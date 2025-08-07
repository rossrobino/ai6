import { Agent } from "@openai/agents";

export const create = () =>
	new Agent({
		name: "Assistant",
		model: "gpt-5-nano",
		handoffDescription:
			"The Assistant is the default, a generalist who responds quickly.",
	});
