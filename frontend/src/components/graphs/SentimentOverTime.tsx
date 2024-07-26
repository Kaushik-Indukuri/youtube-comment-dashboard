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
    { date: "2024-04-01", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-02", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-03", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-04", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-05", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-06", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-07", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-08", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-09", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-10", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-11", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-12", positive: 222, neutral: 150, negative: 120 },
    { date: "2024-04-13", positive: 342, neutral: 380, negative: 120 },
    { date: "2024-04-14", positive: 137, neutral: 220, negative: 120 },
    { date: "2024-04-15", positive: 120, neutral: 170, negative: 120 },
    { date: "2024-04-16", positive: 138, neutral: 190, negative: 120 },
    { date: "2024-04-17", positive: 446, neutral: 360, negative: 120 },
    { date: "2024-04-18", positive: 364, neutral: 410, negative: 120 },
    { date: "2024-04-19", positive: 243, neutral: 180, negative: 120 },
    { date: "2024-04-20", positive: 89, neutral: 150, negative: 120 },
    { date: "2024-04-21", positive: 137, neutral: 200, negative: 120 },
    { date: "2024-04-22", positive: 224, neutral: 170, negative: 120 },
    { date: "2024-04-23", positive: 138, neutral: 230, negative: 120 },
    { date: "2024-04-24", positive: 387, neutral: 290, negative: 120 },
    { date: "2024-04-25", positive: 215, neutral: 250, negative: 120 },
    { date: "2024-04-26", positive: 75, neutral: 130, negative: 120 },
    { date: "2024-04-27", positive: 383, neutral: 420, negative: 120 },
    { date: "2024-04-28", positive: 122, neutral: 180, negative: 120 },
    { date: "2024-04-29", positive: 315, neutral: 240, negative: 120 },
    { date: "2024-04-30", positive: 454, neutral: 380, negative: 120 },
    { date: "2024-05-01", positive: 165, neutral: 220, negative: 120 },
    { date: "2024-05-02", positive: 293, neutral: 310, negative: 120 },
    { date: "2024-05-03", positive: 247, neutral: 190, negative: 120 },
    { date: "2024-05-04", positive: 385, neutral: 420, negative: 120 },
    { date: "2024-05-05", positive: 481, neutral: 390, negative: 120 },
    { date: "2024-05-06", positive: 498, neutral: 520, negative: 120 },
    { date: "2024-05-07", positive: 388, neutral: 300, negative: 120 },
    { date: "2024-05-08", positive: 149, neutral: 210, negative: 120 },
    { date: "2024-05-09", positive: 227, neutral: 180, negative: 120 },
    { date: "2024-05-10", positive: 293, neutral: 330, negative: 120 },
    { date: "2024-05-11", positive: 335, neutral: 270, negative: 120 },
    { date: "2024-05-12", positive: 197, neutral: 240, negative: 120 },
    { date: "2024-05-13", positive: 197, neutral: 160, negative: 120 },
    { date: "2024-05-14", positive: 448, neutral: 490, negative: 120 },
    { date: "2024-05-15", positive: 473, neutral: 380, negative: 120 },
    { date: "2024-05-16", positive: 338, neutral: 400, negative: 120 },
    { date: "2024-05-17", positive: 499, neutral: 420, negative: 120 },
    { date: "2024-05-18", positive: 315, neutral: 350, negative: 120 },
    { date: "2024-05-19", positive: 235, neutral: 180, negative: 120 },
    { date: "2024-05-20", positive: 177, neutral: 230, negative: 120 },
    { date: "2024-05-21", positive: 82, neutral: 140, negative: 120 },
    { date: "2024-05-22", positive: 81, neutral: 120, negative: 12 },
    { date: "2024-05-23", positive: 252, neutral: 290, negative: 120 },
    { date: "2024-05-24", positive: 294, neutral: 220, negative: 120 },
    { date: "2024-05-25", positive: 40, neutral: 30, negative: 30 },
    { date: "2024-05-26", positive: 213, neutral: 170, negative: 120 },
    { date: "2024-05-27", positive: 420, neutral: 460, negative: 120 },
    { date: "2024-05-28", positive: 233, neutral: 190, negative: 120 },
    { date: "2024-05-29", positive: 78, neutral: 130, negative: 120 },
    { date: "2024-05-30", positive: 340, neutral: 280, negative: 120 },
    { date: "2024-05-31", positive: 178, neutral: 230, negative: 120 },
    { date: "2024-06-01", positive: 178, neutral: 200, negative: 120 },
    { date: "2024-06-02", positive: 470, neutral: 410, negative: 120 },
    { date: "2024-06-03", positive: 103, neutral: 160, negative: 120 },
    { date: "2024-06-04", positive: 439, neutral: 380, negative: 120 },
    { date: "2024-06-05", positive: 88, neutral: 140, negative: 120 },
    { date: "2024-06-06", positive: 294, neutral: 250, negative: 120 },
    { date: "2024-06-07", positive: 323, neutral: 370, negative: 120 },
    { date: "2024-06-08", positive: 385, neutral: 320, negative: 120 },
    { date: "2024-06-09", positive: 438, neutral: 480, negative: 120 },
    { date: "2024-06-10", positive: 155, neutral: 200, negative: 120 },
    { date: "2024-06-11", positive: 92, neutral: 150, negative: 120 },
    { date: "2024-06-12", positive: 492, neutral: 420, negative: 120 },
    { date: "2024-06-13", positive: 81, neutral: 130, negative: 120 },
    { date: "2024-06-14", positive: 426, neutral: 380, negative: 120 },
    { date: "2024-06-15", positive: 307, neutral: 350, negative: 120 },
    { date: "2024-06-16", positive: 371, neutral: 310, negative: 120 },
    { date: "2024-06-17", positive: 475, neutral: 520, negative: 120 },
    { date: "2024-06-18", positive: 107, neutral: 170, negative: 120 },
    { date: "2024-06-19", positive: 341, neutral: 290, negative: 120 },
    { date: "2024-06-20", positive: 408, neutral: 450, negative: 120 },
    { date: "2024-06-21", positive: 169, neutral: 210, negative: 120 },
    { date: "2024-06-22", positive: 317, neutral: 270, negative: 120 },
    { date: "2024-06-23", positive: 480, neutral: 530, negative: 120 },
    { date: "2024-06-24", positive: 132, neutral: 180, negative: 120 },
    { date: "2024-06-25", positive: 141, neutral: 190, negative: 120 },
    { date: "2024-06-26", positive: 41, neutral: 36, negative: 23 },
    { date: "2024-06-27", positive: 73, neutral: 24, negative: 3 },
    { date: "2024-06-28", positive: 65, neutral: 11, negative: 24 },
    { date: "2024-06-29", positive: 33, neutral: 17, negative: 50 },
    { date: "2024-06-30", positive: 39, neutral: 31, negative: 30 },
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