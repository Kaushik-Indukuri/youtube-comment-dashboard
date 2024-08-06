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
    { value: 'social media', count: 25 },
    { value: 'profile', count: 18 },
    { value: 'settings', count: 38 },
    { value: 'message', count: 30 },
    { value: 'timeline', count: 28 },
    { value: 'group', count: 25 },
    { value: 'live', count: 20 },
    { value: 'event', count: 15 },
    { value: 'issue', count: 18 },
    { value: 'shop', count: 12 },
    { value: 'alert', count: 10 },
    { value: 'user', count: 14 },
    { value: 'contact', count: 10 },
    { value: 'reactions', count: 9 },
    { value: 'feed', count: 8 },
    { value: 'shortcut', count: 12 },
    { value: 'upgrade', count: 7 },
    { value: 'theme', count: 6 },
    { value: 'recent update', count: 5 },
    { value: 'advertisement', count: 8 },
    { value: 'like', count: 12 },
    { value: 'share', count: 7 },
    { value: 'comment', count: 6 },
    { value: 'tag', count: 5 },
    { value: 'story', count: 8 },
    { value: 'photo', count: 12 },
    { value: 'video call', count: 7 },
    { value: 'status', count: 6 },
    { value: 'memory', count: 5 },
    { value: 'event invite', count: 8 },
    { value: 'friend request', count: 12 },
    { value: 'page like', count: 7 },
    { value: 'group join', count: 6 },
    { value: 'profile update', count: 50 },
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
                margin: '2px',
                padding: '2px',
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
            <CardHeader className="pb-2">
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