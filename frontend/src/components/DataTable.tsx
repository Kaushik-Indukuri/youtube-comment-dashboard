import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

const data = [
    { id: 2, comment: 'Your voice and your content is what make me come back every time! I love that it can be applied to almost everything I do in my life, work, training, partnership and memory. I never realized that memory was a photographer and not a filmmaker  but know that you mentioned it, it is a photo ta come alive and short span of before and after the photo play in my mind but really not the whole thing. Thanks once again for this great video, I love how memory work and affect our lives in subtle ways.', sentiment: -0.59, intent: 'Complaint', region: 'US', lastEdited: '22/09/2023 10:45' },
    { id: 3, comment: 'Great product, very satisfied with the quality!', sentiment: 0.85, intent: 'Praise', region: 'UK', lastEdited: '21/09/2023 09:30' },
    { id: 4, comment: 'The service was okay, nothing special.', sentiment: 0.0, intent: 'Neutral', region: 'CA', lastEdited: '20/09/2023 14:20' },
    { id: 5, comment: 'I had a terrible experience with the customer support.', sentiment: -0.75, intent: 'Complaint', region: 'AU', lastEdited: '19/09/2023 11:15' },
    { id: 6, comment: 'The new update is fantastic, keep up the good work!', sentiment: 0.9, intent: 'Praise', region: 'US', lastEdited: '18/09/2023 16:45' },
    { id: 7, comment: 'Not sure how I feel about the recent changes.', sentiment: -0.1, intent: 'Neutral', region: 'IN', lastEdited: '17/09/2023 08:30' },
    { id: 8, comment: 'The app crashes frequently, please fix it.', sentiment: -0.8, intent: 'Complaint', region: 'US', lastEdited: '16/09/2023 12:00' },
    { id: 9, comment: 'Excellent customer service, very helpful and friendly.', sentiment: 0.95, intent: 'Praise', region: 'UK', lastEdited: '15/09/2023 10:00' },
    { id: 10, comment: 'The product is decent, but there is room for improvement.', sentiment: 0.2, intent: 'Feedback', region: 'CA', lastEdited: '14/09/2023 13:45' },
    { id: 11, comment: 'The user interface is intuitive and easy to navigate. I love how everything is organized.', sentiment: 0.9, intent: 'Praise', region: 'US', lastEdited: '13/09/2023 09:30' },
    { id: 12, comment: 'I encountered a bug while using the search feature. It doesn\'t return accurate results.', sentiment: -0.6, intent: 'Complaint', region: 'UK', lastEdited: '12/09/2023 14:20' },
    { id: 13, comment: 'The product exceeded my expectations. It\'s definitely worth the price.', sentiment: 0.95, intent: 'Praise', region: 'CA', lastEdited: '11/09/2023 11:15' },
    { id: 14, comment: 'I\'m not satisfied with the customer service. They were unhelpful and rude.', sentiment: -0.8, intent: 'Complaint', region: 'AU', lastEdited: '10/09/2023 16:45' },
    { id: 15, comment: 'The recent update introduced some great new features. I\'m impressed!', sentiment: 0.8, intent: 'Praise', region: 'US', lastEdited: '09/09/2023 08:30' },
    { id: 16, comment: 'I have mixed feelings about the changes. Some are good, but others are confusing.', sentiment: -0.2, intent: 'Neutral', region: 'IN', lastEdited: '08/09/2023 12:00' },
    { id: 17, comment: 'The app crashes frequently on my device. It\'s frustrating.', sentiment: -0.9, intent: 'Complaint', region: 'US', lastEdited: '07/09/2023 10:00' },
    { id: 18, comment: 'The customer service was exceptional. They went above and beyond to assist me.', sentiment: 0.98, intent: 'Praise', region: 'UK', lastEdited: '06/09/2023 13:45' },
    { id: 19, comment: 'The product has some flaws, but overall it\'s decent.', sentiment: 0.3, intent: 'Feedback', region: 'CA', lastEdited: '05/09/2023 16:30' },
    { id: 20, comment: 'I\'m impressed with the user interface, but the performance needs improvement.', sentiment: 0.5, intent: 'Feedback', region: 'AU', lastEdited: '04/09/2023 09:15' },
];

const ExpandableComment = ({ comment }: { comment: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100; // Adjust this value to change when comments get truncated

    if (comment.length <= maxLength) {
        return <div className="text-sm text-gray-900">{comment}</div>;
    }

    return (
        <div className="text-sm text-gray-900">
            {isExpanded ? (
                <div onClick={() => setIsExpanded(false)} className="cursor-pointer">
                    {comment}
                </div>
            ) : (
                <>
                    {comment.slice(0, maxLength)}
                    <span
                        onClick={() => setIsExpanded(true)}
                        className="text-gray-900 cursor-pointer ml-1"
                    >
                        ...
                    </span>
                </>
            )}
        </div>
    );
};

const DataTable = () => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
                        Comment
                    </th>
                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Sentiment
                    </th>
                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Intent
                    </th>
                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Region
                    </th>
                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Last edited
                    </th>
                    <th scope="col" className="relative px-2 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                    <tr key={row.id}>
                        <td className="px-6 py-4 w-1/2">
                            <ExpandableComment comment={row.comment} />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${row.sentiment > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                {row.sentiment.toFixed(2)}
                            </span>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{row.intent}</td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{row.region}</td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{row.lastEdited}</td>
                        <td className="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-gray-500 hover:text-gray-900">
                                <MoreHorizontal size={16} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;