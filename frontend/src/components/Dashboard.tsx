import StatsCard from './graphs/KeyStats';
import SentimentDistribution from './graphs/SentimentDistribution';
import IntentClassification from './graphs/IntentClassification';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import KeywordCloud from './graphs/KeywordCloud';
import SentimentOverTime from './graphs/SentimentOverTime';
import CommentsOverTime from './graphs/CommentsOverTime';
import CommentsByRegion from './graphs/CommentsByRegion';

const Dashboard = () => {
    return (
        <div className="p-5">
            <Card className='border-none shadow-none'>
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Overview</CardTitle>
                </CardHeader>
            </Card>

            {/* First row with three charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12">
                <StatsCard />
                <SentimentDistribution />
                <IntentClassification />
            </div>

            <Card className='border-none shadow-none'>
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Advanced Analytics</CardTitle>
                </CardHeader>
            </Card>

            {/* Two charts in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <KeywordCloud />
                <CommentsByRegion />
            </div>

            {/* Two rows with one long chart each */}
            <div className="space-y-8 mb-10">
                <SentimentOverTime />
                <CommentsOverTime />
            </div>
        </div>
    );
};

export default Dashboard;