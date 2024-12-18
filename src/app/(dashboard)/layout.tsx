"use client";
import { useState } from "react";
import { BellDot, Menu, Search, Settings } from "lucide-react";
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
    <section className="flex h-screen w-screen bg-white md:bg-input-bg">
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
              <Menu size={24} className="text-main" />
            </button>
            <p className="text-lg font-bold text-main md:text-2xl">Overview</p>
            <div className="flex items-center justify-end gap-4 md:w-full">
              <div className="hidden w-full max-w-md items-center gap-2 rounded-full bg-input-bg px-6 py-2 md:flex">
                <Search className="text-input-icon" />
                <input
                  placeholder="Search for something"
                  className="bg-transparent text-input-text"
                />
              </div>
              <div className="hidden h-[2.8rem] w-[2.8rem] items-center justify-center rounded-full bg-input-bg md:flex">
                <Settings className="text-input-icon" />
              </div>
              <div className="hidden h-[2.8rem] w-[2.8rem] items-center justify-center rounded-full bg-input-bg md:flex">
                <BellDot className="text-accent" />
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
          <div className="mt-4 flex w-full items-center gap-2 rounded-full bg-input-bg px-6 py-3 md:hidden">
            <Search className="text-input-icon" />
            <input
              placeholder="Search for something"
              className="bg-transparent text-input-text"
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
