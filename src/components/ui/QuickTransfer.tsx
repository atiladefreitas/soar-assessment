"use client";
import { useState } from "react";
import { ChevronRight, Send } from "lucide-react";
import Image from "next/image";
import { contacts } from "@/mocks/contacts";

const QuickTransfer = () => {
  const [amount, setAmount] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contactsPerPage = 3;

  const totalPages = Math.ceil(contacts.length / contactsPerPage);
  const displayedContacts = contacts.slice(
    currentPage * contactsPerPage,
    (currentPage + 1) * contactsPerPage,
  );

  const handleNextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleSend = () => {
    console.log(`Sending ${amount}`);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative">
        <div className="mb-6 flex items-center space-x-4 overflow-hidden">
          {displayedContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex min-w-[80px] transform animate-fade-in cursor-pointer flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 ${isAnimating ? "animate-slide-left" : ""}`}
            >
              <div className="mb-2 h-12 w-12 transform overflow-hidden rounded-full transition-transform duration-300 hover:scale-110">
                <Image
                  width={50}
                  height={50}
                  src={contact.avatar}
                  alt={contact.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-center text-sm font-medium text-gray-900">
                {contact.name.split(" ")[0]}
              </span>
              <span className="text-xs text-gray-500">{contact.role}</span>
            </div>
          ))}

          {contacts.length > contactsPerPage && (
            <button
              type="button"
              onClick={handleNextPage}
              disabled={isAnimating}
              className={`absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-50 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 ${isAnimating ? "animate-pulse" : ""}`}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <p className="text-sm text-black/60">Write Amount</p>
        <div className="flex w-[70%] items-center justify-end rounded-full bg-[#eee] pl-4">
          <input className="w-full bg-transparent text-black/40" />
          <button
            type="button"
            onClick={handleSend}
            className="flex gap-2 rounded-full bg-black px-6 py-2 text-white transition-all hover:scale-105 hover:bg-gray-700"
          >
            Send
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
