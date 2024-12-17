"use client";

import type React from "react";

interface IPageProps {
  children: React.ReactNode;
}

function Layout({ children }: IPageProps) {
  return (
    <section className="flex h-screen w-screen bg-[#F5F7FA]">
      <aside className="border-r-1 h-screen w-[20rem] border-r-black bg-white">
        <p>Title goes here</p>
      </aside>
      <main className="w-full overflow-y-scroll">
        <nav className="min-h-[3rem] w-full bg-white">
          <p className="text-black">this is nav</p>
        </nav>
        <div className="max-w-7xl overflow-y-scroll p-6">{children}</div>
      </main>
    </section>
  );
}

export default Layout;
