"use client";

import {
  LayoutDashboard,
  Package,
  User,
  ShoppingCart,
  LogOut,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/product", icon: Package },
    { name: "Categories", href: "/admin/categories", icon: Tag },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Customers", href: "/admin/users", icon: User },
  ];

  return (
    <div className="flex min-h-screen bg-salaga-bg font-sans">

      {/* SIDEBAR */}
      <aside className="w-64 bg-salaga-sidebar border-r border-gray-800 shadow-sm hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6">
          <h1 className="text-xl font-bold tracking-tight text-salaga-yellow">
            House of Salaga
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 space-y-2">
          {menu.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all 
                ${active
                    ? "bg-salaga-sidebar-active text-white"
                    : "text-salaga-text-gray hover:bg-salaga-sidebar-active/50 hover:text-white"
                  }`}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        {/* Page content here */}
        <div className="p-0">{children}</div>
      </main>
    </div>
  );
}
