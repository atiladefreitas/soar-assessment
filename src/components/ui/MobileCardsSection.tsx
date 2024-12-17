"use client";

import React from "react";
import { CreditCard } from "../CreditCard";

const MobileCardsSection = () => {
  return (
    <div className="block md:hidden">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#343C6A]">My Cards</h1>
        <span className="text-xl font-bold text-gray-800">See all</span>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-scroll">
        <div className="snap-center">
          <CreditCard />
        </div>
        <div className="snap-center">
          <CreditCard variant="light" />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MobileCardsSection;
