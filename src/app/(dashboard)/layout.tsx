"use client";

import { useState } from "react";
import { BellDot, Menu, Search, Settings, X } from "lucide-react";
import Image from "next/image";
import PageTransition from "@/components/ui/PageTransition";
import Aside from "@/components/ui/Aside";

interface IPageProps {
  children: React.ReactNode;
}

function Layout({ children }: IPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="flex h-screen w-screen bg-white md:bg-[#F5F7FA]">
      <Aside isMobileMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />

      <main className="w-full overflow-y-scroll">
        <nav className="flex min-h-[4rem] w-full flex-col bg-white p-4">
          <div className="flex w-full max-w-7xl items-center justify-between px-6">
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} color={"#343C6A"} />
            </button>
            <p className="text-lg font-bold text-[#343C6A] md:text-2xl">
              Overview
            </p>
            <div className="flex items-center justify-end gap-4 md:w-full">
              <div className="hidden w-full max-w-md items-center gap-2 rounded-full bg-[#F5F7FA] px-6 py-2 md:flex">
                <Search className="text-[#718EBF]" />
                <input
                  placeholder="Search for something"
                  className="bg-transparent text-[#8BA3CB]"
                />
              </div>

              <div className="hidden h-[2.8rem] w-[2.8rem] items-center justify-center rounded-full bg-[#F5F7FA] md:flex">
                <Settings color={"#718EBF"} />
              </div>

              <div className="hidden h-[2.8rem] w-[2.8rem] items-center justify-center rounded-full bg-[#F5F7FA] md:flex">
                <BellDot color={"#396AFF"} />
              </div>
              <Image
                width={35}
                height={35}
                alt="Main User"
                src="/users/main-user.png"
                className="md:w-[50px]"
              />
            </div>
          </div>

          <div className="mt-4 flex w-full items-center gap-2 rounded-full bg-[#F5F7FA] px-6 py-3 md:hidden">
            <Search className="text-[#718EBF]" />
            <input
              placeholder="Search for something"
              className="bg-transparent text-[#8BA3CB]"
            />
          </div>
        </nav>
        <div className="max-w-7xl p-6">
          <PageTransition>{children}</PageTransition>
        </div>
      </main>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="button"
          tabIndex={0}
        />
      )}
    </section>
  );
}

export default Layout;
