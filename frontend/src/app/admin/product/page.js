"use client";

import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="bg-salaga-bg min-h-screen font-sans">
            <div className="p-8">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-salaga-text-header">
                        Products
                    </h2>
                    <Link href="/admin/product/add">
                        <button className="bg-salaga-blue border border-salaga-blue-dark text-blue-100 font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                            Add Product
                        </button>
                    </Link>
                </header>

                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border-transparent focus:border-salaga-blue focus:ring-salaga-blue rounded-full text-gray-700 placeholder:text-gray-500"
                        placeholder="Product Name, Category or Status"
                        type="text"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-bold text-gray-500 tracking-wider">Name</th>
                                <th className="px-6 py-4 font-bold text-gray-500 tracking-wider">Category</th>
                                <th className="px-6 py-4 font-bold text-gray-500 tracking-wider">Price</th>
                                <th className="px-6 py-4 font-bold text-gray-500 tracking-wider">Stock</th>
                                <th className="px-6 py-4 font-bold text-gray-500 tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Leather Jacket</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Clothing</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">$120.00</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">25</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-salaga-badge-active-bg text-salaga-badge-active-text">
                                        Active
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Sneakers</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Footwear</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">$80.00</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">40</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-salaga-badge-inactive-bg text-salaga-badge-inactive-text">
                                        Inactive
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Wool Sweater</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Clothing</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">$60.00</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">15</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-salaga-badge-active-bg text-salaga-badge-active-text">
                                        Active
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Handbag</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Accessories</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">$150.00</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">10</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-salaga-badge-active-bg text-salaga-badge-active-text">
                                        Active
                                    </span>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Watch</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">Accessories</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">$200.00</td>
                                <td className="px-6 py-5 whitespace-nowrap text-gray-700">0</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-salaga-badge-inactive-bg text-salaga-badge-inactive-text">
                                        Inactive
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
