"use client";

import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
    return (
        <div className="bg-salaga-bg min-h-screen font-sans">
            <div className="p-8">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-salaga-text-header">
                        Categories
                    </h2>
                    <Link href="/admin/categories/add">
                        <button className="bg-salaga-blue border border-salaga-blue-dark text-blue-100 font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-sm">
                            Add Category
                        </button>
                    </Link>
                </header>

                {/* Search Bar */}
                <div className="relative mb-8 flex justify-center">
                    <div className="relative w-[591px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            className="w-full pl-12 pr-4 py-3 bg-gray-100/50 border-none rounded-full text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-salaga-blue/20"
                            placeholder="Category Name"
                            type="text"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-lg w-1/3">Name</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-lg">Description</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-4">
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-6 text-gray-600 text-lg">Clothing</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Men’s and Women’s apparel</td>
                            </tr>

                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-6 text-gray-600 text-lg">Footwear</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Shoes and sneakers</td>
                            </tr>

                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-6 text-gray-600 text-lg">Accessories</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Bags, hats and watches</td>
                            </tr>

                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-6 text-gray-600 text-lg">Home & Living</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Home decor items</td>
                            </tr>

                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-6 text-gray-600 text-lg">Jewelries</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Gold jewelries with gems</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
