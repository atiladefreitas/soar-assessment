"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { SidebarItems } from "@/mocks/sidebar";

interface AsideProps {
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Aside({ isMobileMenuOpen, toggleMenu }: AsideProps) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`fixed z-50 h-screen w-[20rem] transform border-r border-r-[#c4c4c4] bg-white transition-transform duration-300 ease-in-out md:relative md:transform-none ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 md:p-6">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-main">
            <Image
              width={20}
              height={20}
              alt="Main User"
              src="/icons/task-icon.png"
            />
            Soar Task
          </h1>
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="space-y-2">
          {SidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => toggleMenu()}
                  className={`flex h-[3rem] items-center space-x-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-gray-50 font-bold text-gray-900"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`h-full w-1 rounded-r-2xl ${isActive ? "bg-black" : "bg-transparent"}`}
                  />
                  <Icon
                    size={20}
                    className={isActive ? "text-gray-900" : "text-gray-500"}
                    strokeWidth={isActive ? 3 : 2}
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="button"
          tabIndex={0}
        />
      )}
    </>
  );
}
