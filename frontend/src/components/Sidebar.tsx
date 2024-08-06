import React from 'react';
import { Link, BarChart2, Ungroup, Table } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';



const Sidebar = () => {
    return (
        <div className="bg-white text-black w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out border-r border-gray-300">
            <div className="flex items-center space-x-2 px-4">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-white">
                    <Ungroup size={20} />
                </div>
                <span className="text-lg font-semibold">Youtube Comment Analytics</span>
            </div>
            <nav>
                <RouterLink to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 active:text-red-600">
                    <BarChart2 className="inline-block mr-2 active:text-red-600" size={20} />
                    Dashboard
                </RouterLink>
                <RouterLink to="/table" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 active:text-red-600">
                    <Table className="inline-block mr-2 active:text-red-600" size={20} />
                    Data Table
                </RouterLink>
            </nav>
            <div className="px-4 py-4">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Youtube Video URL</h5>
                <div className="relative py-3">
                    <input
                        type="text"
                        placeholder="Your URL"
                        className="pl-8 pr-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    />
                    <Link className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                    Analyze
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
