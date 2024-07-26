import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress"

const StatsCard = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(127128), 2312305)
        return () => clearTimeout(timer)
    }, [])

    const [progress2, setProgress2] = React.useState(67);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress2(127128), 177000)
        return () => clearTimeout(timer)
    }, [])

    return <Card className='border-none shadow-none'>
        <CardHeader>
            <div className="flex items-start justify-center flex-col gap-2">
                <div className="text-lg font-semibold">
                    Like Ratio
                </div>
                <div className="flex items-start justify-center text-md font-medium">
                    127,259
                    <span className="text-muted-foreground">:50,000</span>
                </div>
                <Progress value={progress2} className="w-[100%]" />
                <div className="text-sm text-muted-foreground">
                    Ratio of likes to dislikes
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex items-start justify-center flex-col gap-2">
                <div className="text-lg font-semibold">
                    Comment Ratio
                </div>
                <div className="flex items-start justify-center text-md font-medium">
                    127,259
                    <span className="text-muted-foreground">/2,312,549</span>
                </div>
                <Progress value={progress} className="w-[100%]" />
                <div className="text-sm text-muted-foreground">
                    Number of comments, comment likes, and threads from total views
                </div>
            </div>
        </CardContent>
    </Card>
};

export default StatsCard;