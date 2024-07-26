import { TagCloud } from 'react-tagcloud';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

const data = [
    { value: 'facebook', count: 25 },
    { value: 'update', count: 18 },
    { value: 'app', count: 38 },
    { value: 'post', count: 30 },
    { value: 'time', count: 28 },
    { value: 'page', count: 25 },
    { value: 'video', count: 20 },
    { value: 'friend', count: 15 },
    { value: 'problem', count: 18 },
    { value: 'marketplace', count: 12 },
    { value: 'notification', count: 10 },
    { value: 'account', count: 14 },
    { value: 'phone', count: 10 },
    { value: 'comments', count: 9 },
    { value: 'news feed', count: 8 },
    { value: 'fb', count: 12 },
    { value: 'new update', count: 7 },
    { value: 'dark mode', count: 6 },
    { value: 'last update', count: 5 },
    { value: 'facebook', count: 25 },
    { value: 'update', count: 18 },
    { value: 'app', count: 38 },
    { value: 'post', count: 30 },
    { value: 'time', count: 28 },
    { value: 'page', count: 25 },
    { value: 'video', count: 20 },
    { value: 'friend', count: 15 },
    { value: 'problem', count: 18 },
    { value: 'marketplace', count: 12 },
    { value: 'notification', count: 10 },
    { value: 'account', count: 14 },
    { value: 'phone', count: 10 },
    { value: 'comments', count: 9 },
    { value: 'news feed', count: 8 },
    { value: 'fb', count: 12 },
    { value: 'new update', count: 7 },
    { value: 'dark mode', count: 6 },
    { value: 'last update', count: 5 },
];

const customRenderer = (tag: { value: string }, size: number, color: string) => {
    const randomRed = Math.floor(Math.random() * (256 - 124) + 124);
    const shadeOfRed = `rgb(${randomRed}, 0, 0)`;

    return (
        <span
            key={tag.value}
            style={{
                animation: 'blinker 3s linear infinite',
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${size / 20}em`, // Reduce the font size 
                margin: '3px',
                padding: '3px',
                display: 'inline-block',
                color: shadeOfRed,
            }}
        >
            {tag.value}
        </span>
    );
};

const KeywordCloud = () => {
    return (
        <Card className="flex flex-col border-none shadow-none">
            <CardHeader>
                <CardTitle className="text-lg">Keyword Cloud</CardTitle>
                <CardDescription>
                    Visualizing the most commonly seen keywords in comments
                </CardDescription>
            </CardHeader>
            <CardContent>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={data}
                    renderer={customRenderer}
                    className="text-center"
                />
            </CardContent>
        </Card>
    );
};

export default KeywordCloud;