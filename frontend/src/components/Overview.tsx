import React from 'react';
import StatsCard from './graphs/KeyStats';
import SentimentDistribution from './graphs/SentimentDistribution';
import IntentClassification from './graphs/IntentClassification';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import KeywordCloud from './graphs/KeywordCloud';
import SentimentOverTime from './graphs/SentimentOverTime';

// Placeholder component for additional charts
const PlaceholderChart = ({ title, className }: { title: string, className: string }) => (
    <Card className={className}>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="h-[250px] flex items-center justify-center bg-muted">
                Placeholder for {title}
            </div>
        </CardContent>
    </Card>
);

const Dashboard = () => {
    return (
        <div className="">

            {/* First row with three charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12">
                <StatsCard />
                <SentimentDistribution />
                <IntentClassification />
            </div>

            {/* Advanced Analytics section */}
            <h2 className="text-2xl font-semibold mb-5 ml-6">Advanced Analytics</h2>

            {/* Two charts in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <KeywordCloud />
                <SentimentDistribution />
            </div>

            {/* Two rows with one long chart each */}
            <div className="space-y-8">
                <SentimentOverTime />
                <SentimentOverTime />
            </div>
        </div>
    );
};

export default Dashboard;