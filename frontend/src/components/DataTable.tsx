import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

const data = [
    { id: 1, comment: 'This is a short comment', sentiment: 0.68, intent: 'Feedback', region: 'US-West 1', lastEdited: '23/09/2023 13:00' },
    { id: 2, comment: 'This is a very long comment that needs to be truncated and expandable. It contains multiple sentences and goes on for quite a while to demonstrate the expansion functionality.', sentiment: -0.59, intent: 'Complaint', region: 'US-East 2', lastEdited: '22/09/2023 10:45' },
    // Add more data rows here
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