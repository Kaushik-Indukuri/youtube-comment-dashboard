import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
    { date: "2024-04-01", comments: 123 },
    { date: "2024-04-02", comments: 97, },
    { date: "2024-04-03", comments: 167, },
    { date: "2024-04-04", comments: 242, },
    { date: "2024-04-05", comments: 373, },
    { date: "2024-04-06", comments: 301, },
    { date: "2024-04-07", comments: 245, },
    { date: "2024-04-08", comments: 409, },
    { date: "2024-04-09", comments: 59, },
    { date: "2024-04-10", comments: 261, },
    { date: "2024-04-11", comments: 327, },
    { date: "2024-04-12", comments: 292, },
    { date: "2024-04-13", comments: 342, },
    { date: "2024-04-14", comments: 137, },
    { date: "2024-04-15", comments: 120, },
    { date: "2024-04-16", comments: 138, },
    { date: "2024-04-17", comments: 446, },
    { date: "2024-04-18", comments: 364, },
    { date: "2024-04-19", comments: 243, },
    { date: "2024-04-20", comments: 89, },
    { date: "2024-04-21", comments: 137, },
    { date: "2024-04-22", comments: 224, },
    { date: "2024-04-23", comments: 138, },
    { date: "2024-04-24", comments: 387, },
    { date: "2024-04-25", comments: 215, },
    { date: "2024-04-26", comments: 75, },
    { date: "2024-04-27", comments: 383, },
    { date: "2024-04-28", comments: 122, },
    { date: "2024-04-29", comments: 315, },
    { date: "2024-04-30", comments: 454, },
    { date: "2024-05-01", comments: 165, },
    { date: "2024-05-02", comments: 293, },
    { date: "2024-05-03", comments: 247, },
    { date: "2024-05-04", comments: 385, },
    { date: "2024-05-05", comments: 481, },
    { date: "2024-05-06", comments: 498, },
    { date: "2024-05-07", comments: 388, },
    { date: "2024-05-08", comments: 149, },
    { date: "2024-05-09", comments: 227, },
    { date: "2024-05-10", comments: 293, },
    { date: "2024-05-11", comments: 335, },
    { date: "2024-05-12", comments: 197, },
    { date: "2024-05-13", comments: 197, },
    { date: "2024-05-14", comments: 448, },
    { date: "2024-05-15", comments: 473, },
    { date: "2024-05-16", comments: 338, },
    { date: "2024-05-17", comments: 499, },
    { date: "2024-05-18", comments: 315, },
    { date: "2024-05-19", comments: 235, },
    { date: "2024-05-20", comments: 177, },
    { date: "2024-05-21", comments: 82, },
    { date: "2024-05-22", comments: 81, },
    { date: "2024-05-23", comments: 252, },
    { date: "2024-05-24", comments: 294, },
    { date: "2024-05-25", comments: 201, },
    { date: "2024-05-26", comments: 213, },
    { date: "2024-05-27", comments: 420, },
    { date: "2024-05-28", comments: 233, },
    { date: "2024-05-29", comments: 78, },
    { date: "2024-05-30", comments: 340, },
    { date: "2024-05-31", comments: 178, },
    { date: "2024-06-01", comments: 178, },
    { date: "2024-06-02", comments: 470, },
    { date: "2024-06-03", comments: 103, },
    { date: "2024-06-04", comments: 439, },
    { date: "2024-06-05", comments: 88, },
    { date: "2024-06-06", comments: 294, },
    { date: "2024-06-07", comments: 323, },
    { date: "2024-06-08", comments: 385, },
    { date: "2024-06-09", comments: 438, },
    { date: "2024-06-10", comments: 155, },
    { date: "2024-06-11", comments: 92, },
    { date: "2024-06-12", comments: 492, },
    { date: "2024-06-13", comments: 81, },
    { date: "2024-06-14", comments: 426, },
    { date: "2024-06-15", comments: 307, },
    { date: "2024-06-16", comments: 371, },
    { date: "2024-06-17", comments: 475, },
    { date: "2024-06-18", comments: 107, },
    { date: "2024-06-19", comments: 341, },
    { date: "2024-06-20", comments: 408, },
    { date: "2024-06-21", comments: 169, },
    { date: "2024-06-22", comments: 317, },
    { date: "2024-06-23", comments: 480, },
    { date: "2024-06-24", comments: 132, },
    { date: "2024-06-25", comments: 141, },
    { date: "2024-06-26", comments: 434, },
    { date: "2024-06-27", comments: 448, },
    { date: "2024-06-28", comments: 149, },
    { date: "2024-06-29", comments: 103, },
    { date: "2024-06-30", comments: 446, },
]

const chartConfig = {
    comments: {
        label: "Comments Posted",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const CommentsOverTime = () => {
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
                    <CardTitle className="text-lg">Comments Posted Over Time</CardTitle>
                    <CardDescription>
                        Plotting the number of comments posted across fixed time intervals
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
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={filteredData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
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
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="comments"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey="comments"
                            type="monotone"
                            stroke={`var(--color-comments)`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default CommentsOverTime;