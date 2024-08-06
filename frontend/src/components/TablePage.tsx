import { Search, Download, Grid } from 'lucide-react';
import DataTable from './DataTable';

const TablePage = () => {
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto pt-10 pb-4 px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-2xl font-semibold">Data Table</h1>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm">+ Intent</button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm">+ Region</button>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search comments..."
                                className="pl-8 pr-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                            />
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                            <Download size={16} className="inline-block" />
                            <span className="ml-1">Export</span>
                        </button>
                    </div>
                </div>
                <DataTable />
            </div>
        </header>
    );
};

export default TablePage;