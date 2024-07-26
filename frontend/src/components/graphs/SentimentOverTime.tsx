import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
    { month: 'Jan 2019', positive: 40, neutral: 35, negative: 25 },
    { month: 'Feb 2019', positive: 45, neutral: 30, negative: 25 },
    { month: 'Mar 2019', positive: 50, neutral: 25, negative: 25 },
    { month: 'Apr 2019', positive: 55, neutral: 25, negative: 20 },
    { month: 'May 2019', positive: 60, neutral: 20, negative: 20 },
    { month: 'Jun 2019', positive: 65, neutral: 20, negative: 15 },
    { month: 'Jul 2019', positive: 70, neutral: 15, negative: 15 },
    { month: 'Aug 2019', positive: 75, neutral: 15, negative: 10 },
];

const chartConfig = {
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
    return (
        <Card className="border-none shadow-none h-65">
            <CardHeader>
                <CardTitle className="text-lg">Sentiment Over Time</CardTitle>
                <CardDescription>
                    Illustrating sentiment distribution across fixed time intervals
                </CardDescription>
            </CardHeader>
            <CardContent className="">
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={0}
                            tickCount={3}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="negative"
                            type="natural"
                            fill="var(--color-negative)"
                            fillOpacity={0.4}
                            stroke="var(--color-negative)"
                            stackId="a"
                        />
                        <Area
                            dataKey="neutral"
                            type="natural"
                            fill="var(--color-neutral)"
                            fillOpacity={0.4}
                            stroke="var(--color-neutral)"
                            stackId="a"
                        />
                        <Area
                            dataKey="positive"
                            type="natural"
                            fill="var(--color-positive)"
                            fillOpacity={0.4}
                            stroke="var(--color-positive)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SentimentOverTime;