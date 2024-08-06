"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart"
const chartData = [
    { browser: "chrome", visitors: 43654, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 26153, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 1542, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 4314, fill: "var(--color-edge)" },
    { browser: "other", visitors: 2180, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "United States",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const CommentsByRegion = () => {
    return (
        <Card className="flex flex-col border-none shadow-none">
            <CardHeader className="items-start pb-5">
                <CardTitle className="text-lg">Comments By Region</CardTitle>
                <CardDescription>Displaying the number of comments posted from each region</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            labelLine={false}
                            label={({ payload, ...props }) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x}
                                        y={props.y}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill="hsla(var(--foreground))"
                                    >
                                        {`${payload.visitors}`}
                                    </text>
                                )
                            }}
                            nameKey="browser"
                        />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="browser" />}
                            className="-translate-y-2 flex-wrap gap-2 mt-5 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default CommentsByRegion;