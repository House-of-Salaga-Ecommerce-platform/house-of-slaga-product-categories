"use client";

import React from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddCategoryPage() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-salaga-bg font-sans">
            {/* Background Content (Simulated Categories Page) */}
            <div className="p-8 opacity-50 pointer-events-none" aria-hidden="true">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-salaga-text-header">
                        Categories
                    </h2>
                    <button className="bg-salaga-blue text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm">
                        Add Category
                    </button>
                </header>

                {/* Search Bar */}
                <div className="relative mb-8 flex justify-center">
                    <div className="relative w-[591px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            className="w-full pl-12 pr-4 py-3 bg-gray-100/50 border-none rounded-full text-gray-700 placeholder:text-gray-400"
                            placeholder="Category Name"
                            type="text"
                            readOnly
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
                            <tr className="border-b border-gray-50">
                                <td className="px-6 py-6 text-gray-600 text-lg">Clothing</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Men’s and Women’s apparel</td>
                            </tr>
                            <tr className="border-b border-gray-50">
                                <td className="px-6 py-6 text-gray-600 text-lg">Footwear</td>
                                <td className="px-6 py-6 text-gray-600 text-lg">Shoes and sneakers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg transform transition-all">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Add New Category</h3>
                        <Link href="/admin/categories" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <X size={24} />
                        </Link>
                    </div>

                    <div className="p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="category-name">Category Name</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-red-500 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 dark:text-gray-100"
                                id="category-name"
                                placeholder="e.g. Clothing"
                                type="text"
                                defaultValue=""
                                required
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">This field is required.</p>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="category-description">Description</label>
                                <span className="text-xs text-gray-500 dark:text-gray-400">0 / 250</span>
                            </div>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-salaga-blue focus:border-transparent text-gray-900 dark:text-gray-100"
                                id="category-description"
                                maxLength={250}
                                placeholder="A short description for the category..."
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg flex justify-end gap-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={() => router.back()}
                            className="px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-salaga-blue border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-salaga-blue transition-colors">
                            Add Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
