"use client";

import React from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-salaga-bg font-sans">
            {/* Background Content (Simulated Product Page) */}
            <div className="p-8 opacity-50 pointer-events-none" aria-hidden="true">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-salaga-text-header">
                        Products
                    </h2>
                    <button className="bg-salaga-blue text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm">
                        Add Product
                    </button>
                </header>
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        className="w-full max-w-md pl-12 pr-4 py-3 bg-gray-100 rounded-lg"
                        placeholder="Search for products"
                        type="text"
                        readOnly
                    />
                </div>
                <div className="bg-white rounded-lg shadow-sm">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-500">Product Name</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-500">Category</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-500">Price</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-500">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Placeholder rows to match background look */}
                            <tr><td className="px-6 py-4">Vintage Leather Jacket</td></tr>
                            <tr><td className="px-6 py-4">Classic Sneakers</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl transform transition-all">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Add New Product</h3>
                        <Link href="/admin/product" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <X size={24} />
                        </Link>
                    </div>

                    <div className="p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="product-name">Product Name</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-salaga-blue focus:border-transparent text-gray-900 dark:text-gray-100"
                                id="product-name"
                                placeholder="e.g. Vintage Leather Jacket"
                                type="text"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="product-category">Category</label>
                            <select
                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-salaga-blue focus:border-transparent text-gray-900 dark:text-gray-100"
                                id="product-category"
                            >
                                <option>Select a category</option>
                                <option>Clothing</option>
                                <option>Footwear</option>
                                <option>Accessories</option>
                                <option>Home & Living</option>
                                <option>Jewelries</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="product-price">Price</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">$</span>
                                    <input
                                        className="w-full pl-7 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-salaga-blue focus:border-transparent text-gray-900 dark:text-gray-100"
                                        id="product-price"
                                        placeholder="199.99"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="product-stock">Stock</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-salaga-blue focus:border-transparent text-gray-900 dark:text-gray-100"
                                    id="product-stock"
                                    placeholder="e.g. 50"
                                    type="number"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="product-description">Description</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-salaga-blue focus:border-transparent text-gray-900 dark:text-gray-100"
                                id="product-description"
                                placeholder="A short description of the product..."
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
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
