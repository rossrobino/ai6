import * as colors from "@/lib/colors";
import { defu } from "defu";
import type * as echarts from "echarts";

export const Chart = (props: { options: echarts.EChartsOption }) => {
	const options = defu(props.options, {
		legend: { textStyle: { color: colors.base["500"] } },
		textStyle: {
			fontFamily: "'Geist Mono', monospace",
			color: colors.base["500"],
		},
		yAxis: {
			splitLine: { lineStyle: { color: colors.base["500"] } },
			axisLine: { lineStyle: { color: colors.base["500"] } },
			axisTick: { lineStyle: { color: colors.base["500"] } },
		},
		xAxis: {
			splitLine: { lineStyle: { color: colors.base["500"] } },
			axisLine: { lineStyle: { color: colors.base["500"] } },
			axisTick: { lineStyle: { color: colors.base["500"] } },
		},
	} as echarts.EChartsOption);

	return (
		<e-chart
			class="mt-12 mb-8 block h-96 w-full"
			options={JSON.stringify(options)}
		>
			<noscript class="text-muted-foreground">
				JavaScript is required to view charts.
			</noscript>
		</e-chart>
	);
};
