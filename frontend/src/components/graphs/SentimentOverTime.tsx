import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const chartData = [
    { date: "2024-04-01", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-02", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-03", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-04", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-05", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-06", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-07", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-08", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-09", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-10", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-11", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-12", positive: 22, neutral: 15, negative: 63 },
    { date: "2024-04-13", positive: 34, neutral: 38, negative: 28 },
    { date: "2024-04-14", positive: 13, neutral: 22, negative: 65 },
    { date: "2024-04-15", positive: 12, neutral: 17, negative: 71 },
    { date: "2024-04-16", positive: 14, neutral: 19, negative: 67 },
    { date: "2024-04-17", positive: 45, neutral: 36, negative: 19 },
    { date: "2024-04-18", positive: 36, neutral: 41, negative: 23 },
    { date: "2024-04-19", positive: 24, neutral: 18, negative: 58 },
    { date: "2024-04-20", positive: 9, neutral: 15, negative: 76 },
    { date: "2024-04-21", positive: 13, neutral: 20, negative: 67 },
    { date: "2024-04-22", positive: 22, neutral: 17, negative: 61 },
    { date: "2024-04-23", positive: 14, neutral: 23, negative: 63 },
    { date: "2024-04-24", positive: 39, neutral: 29, negative: 32 },
    { date: "2024-04-25", positive: 21, neutral: 25, negative: 54 },
    { date: "2024-04-26", positive: 7, neutral: 12, negative: 81 },
    { date: "2024-04-27", positive: 38, neutral: 42, negative: 20 },
    { date: "2024-04-28", positive: 12, neutral: 18, negative: 70 },
    { date: "2024-04-29", positive: 31, neutral: 24, negative: 45 },
    { date: "2024-04-30", positive: 45, neutral: 38, negative: 17 },
    { date: "2024-05-01", positive: 16, neutral: 22, negative: 62 },
    { date: "2024-05-02", positive: 29, neutral: 31, negative: 40 },
    { date: "2024-05-03", positive: 24, neutral: 19, negative: 57 },
    { date: "2024-05-04", positive: 38, neutral: 42, negative: 20 },
    { date: "2024-05-05", positive: 48, neutral: 39, negative: 13 },
    { date: "2024-05-06", positive: 49, neutral: 51, negative: 0 },
    { date: "2024-05-07", positive: 38, neutral: 29, negative: 33 },
    { date: "2024-05-08", positive: 15, neutral: 21, negative: 64 },
    { date: "2024-05-09", positive: 23, neutral: 18, negative: 59 },
    { date: "2024-05-10", positive: 29, neutral: 33, negative: 38 },
    { date: "2024-05-11", positive: 33, neutral: 27, negative: 40 },
    { date: "2024-05-12", positive: 19, neutral: 24, negative: 57 },
    { date: "2024-05-13", positive: 19, neutral: 16, negative: 65 },
    { date: "2024-05-14", positive: 44, neutral: 48, negative: 8 },
    { date: "2024-05-15", positive: 47, neutral: 38, negative: 15 },
    { date: "2024-05-16", positive: 33, neutral: 39, negative: 28 },
    { date: "2024-05-17", positive: 49, neutral: 41, negative: 10 },
    { date: "2024-05-18", positive: 31, neutral: 35, negative: 34 },
    { date: "2024-05-19", positive: 23, neutral: 18, negative: 59 },
    { date: "2024-05-20", positive: 17, neutral: 23, negative: 60 },
    { date: "2024-05-21", positive: 8, neutral: 14, negative: 78 },
    { date: "2024-05-22", positive: 8, neutral: 12, negative: 80 },
    { date: "2024-05-23", positive: 25, neutral: 29, negative: 46 },
    { date: "2024-05-24", positive: 29, neutral: 22, negative: 49 },
    { date: "2024-05-25", positive: 4, neutral: 3, negative: 93 },
    { date: "2024-05-26", positive: 21, neutral: 17, negative: 62 },
    { date: "2024-05-27", positive: 42, neutral: 46, negative: 12 },
    { date: "2024-05-28", positive: 23, neutral: 19, negative: 58 },
    { date: "2024-05-29", positive: 8, neutral: 13, negative: 79 },
    { date: "2024-05-30", positive: 34, neutral: 28, negative: 38 },
    { date: "2024-05-31", positive: 17, neutral: 22, negative: 61 },
    { date: "2024-06-01", positive: 17, neutral: 20, negative: 63 },
    { date: "2024-06-02", positive: 47, neutral: 41, negative: 12 },
    { date: "2024-06-03", positive: 10, neutral: 16, negative: 74 },
    { date: "2024-06-04", positive: 43, neutral: 37, negative: 20 },
    { date: "2024-06-05", positive: 9, neutral: 14, negative: 77 },
    { date: "2024-06-06", positive: 29, neutral: 25, negative: 46 },
    { date: "2024-06-07", positive: 32, neutral: 37, negative: 31 },
    { date: "2024-06-08", positive: 38, neutral: 32, negative: 30 },
    { date: "2024-06-09", positive: 43, neutral: 47, negative: 10 },
    { date: "2024-06-10", positive: 15, neutral: 20, negative: 65 },
    { date: "2024-06-11", positive: 9, neutral: 15, negative: 76 },
    { date: "2024-06-12", positive: 49, neutral: 42, negative: 9 },
    { date: "2024-06-13", positive: 8, neutral: 13, negative: 79 },
    { date: "2024-06-14", positive: 42, neutral: 37, negative: 21 },
    { date: "2024-06-15", positive: 30, neutral: 35, negative: 35 },
    { date: "2024-06-16", positive: 37, neutral: 31, negative: 32 },
    { date: "2024-06-17", positive: 47, neutral: 52, negative: 1 },
    { date: "2024-06-18", positive: 10, neutral: 16, negative: 74 },
    { date: "2024-06-19", positive: 34, neutral: 29, negative: 37 },
    { date: "2024-06-20", positive: 41, neutral: 45, negative: 14 },
    { date: "2024-06-21", positive: 26, neutral: 12, negative: 62 },
    { date: "2024-06-22", positive: 5, neutral: 34, negative: 61 },
    { date: "2024-06-23", positive: 48, neutral: 52, negative: 0 },
    { date: "2024-06-24", positive: 13, neutral: 18, negative: 69 },
    { date: "2024-06-25", positive: 14, neutral: 19, negative: 67 },
    { date: "2024-06-26", positive: 4, neutral: 3, negative: 93 },
    { date: "2024-06-27", positive: 7, neutral: 2, negative: 91 },
    { date: "2024-06-28", positive: 6, neutral: 1, negative: 93 },
    { date: "2024-06-29", positive: 3, neutral: 2, negative: 95 },
    { date: "2024-06-30", positive: 4, neutral: 3, negative: 93 },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    positive: {
        label: "Positive",
        color: "hsl(var(--chart-2))",
    },
    neutral: {
        label: "Neutral",
        color: "hsl(var(--chart-3))",
    },
    negative: {
        label: "Negative",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const SentimentOverTime = () => {
    const [timeRange, setTimeRange] = React.useState("90d")

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const now = new Date()
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        now.setDate(now.getDate() - daysToSubtract)
        return date >= now
    })

    return (
        <Card className="border-none shadow-none">
            <CardHeader className="flex items-center gap-2 space-y-0 py-2 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle className="text-lg">Sentiment Over Time</CardTitle>
                    <CardDescription>
                        Showing sentiment distribution across fixed time intervals
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="w-[160px] rounded sm:ml-auto"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="90d" className="rounded-lg">
                            Last 3 months
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            Last 30 days
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            Last 7 days
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillPositive" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-positive)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-positive)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillNeutral" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-neutral)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-neutral)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillNegative" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-negative)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-negative)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="negative"
                            type="natural"
                            fill="url(#fillNegative)"
                            stroke="var(--color-negative)"
                            stackId="a"
                        />
                        <Area
                            dataKey="neutral"
                            type="natural"
                            fill="url(#fillNeutral)"
                            stroke="var(--color-neutral)"
                            stackId="a"
                        />
                        <Area
                            dataKey="positive"
                            type="natural"
                            fill="url(#fillPositive)"
                            stroke="var(--color-positive)"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default SentimentOverTime;