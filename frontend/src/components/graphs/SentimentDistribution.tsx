import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const chartData = [
    { sentiment: "positive", comments: 12250, fill: "hsl(var(--chart-2))" },
    { sentiment: "neutral", comments: 34100, fill: "hsl(var(--chart-3))" },
    { sentiment: "negative", comments: 32123, fill: "hsl(var(--chart-1))" },
]

const chartConfig = {
    comments: {
        label: "Comments",
    },
} satisfies ChartConfig

const SentimentDistribution = () => {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.comments, 0)
    }, [])

    return (
        <Card className="flex flex-col border-none shadow-none">
            <CardHeader className="items-start pb-0">
                <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                <CardDescription>Displaying the sentiment distribution of comments</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="comments"
                            nameKey="sentiment"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Comments
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col gap-2 text-sm">
                <Select>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="All regions" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>North America</SelectLabel>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Europe & Africa</SelectLabel>
                            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                            <SelectItem value="cet">Central European Time (CET)</SelectItem>
                            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                            <SelectItem value="west">
                                Western European Summer Time (WEST)
                            </SelectItem>
                            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Asia</SelectLabel>
                            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                            <SelectItem value="ist_indonesia">
                                Indonesia Central Standard Time (WITA)
                            </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Australia & Pacific</SelectLabel>
                            <SelectItem value="awst">
                                Australian Western Standard Time (AWST)
                            </SelectItem>
                            <SelectItem value="acst">
                                Australian Central Standard Time (ACST)
                            </SelectItem>
                            <SelectItem value="aest">
                                Australian Eastern Standard Time (AEST)
                            </SelectItem>
                            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>South America</SelectLabel>
                            <SelectItem value="art">Argentina Time (ART)</SelectItem>
                            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </CardFooter> */}
        </Card>
    )
}

export default SentimentDistribution;