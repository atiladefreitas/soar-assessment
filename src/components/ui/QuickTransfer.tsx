"use client";

import { useState } from "react";
import { ChevronRight, Send } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { contacts } from "@/mocks/contacts";

interface ContactCardProps {
  name: string;
  avatar: string;
  role: string;
}

const ContactCard = ({ name, avatar, role }: ContactCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    whileHover={{ scale: 1.05 }}
    className="flex min-w-[80px] cursor-pointer flex-col items-center"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="mb-2 h-12 w-12 overflow-hidden rounded-full"
    >
      <Image
        width={50}
        height={50}
        src={avatar}
        alt={name}
        className="h-full w-full object-cover"
      />
    </motion.div>
    <span className="text-center text-sm font-medium text-gray-900">
      {name.split(" ")[0]}
    </span>
    <span className="text-xs text-gray-500">{role}</span>
  </motion.div>
);

const SendButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="button"
    onClick={onClick}
    className="flex gap-2 rounded-full bg-black px-6 py-2 text-white transition-colors hover:bg-gray-700"
  >
    Send
    <Send />
  </motion.button>
);

const NextButton = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
  >
    <ChevronRight className="h-5 w-5 text-gray-600" />
  </motion.button>
);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full flex-col gap-4"
    >
      <div className="relative">
        <motion.div
          layout
          className="mb-6 flex items-center space-x-4 overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {displayedContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                avatar={contact.avatar}
                role={contact.role}
              />
            ))}
          </AnimatePresence>

          {contacts.length > contactsPerPage && (
            <NextButton onClick={handleNextPage} disabled={isAnimating} />
          )}
        </motion.div>
      </div>

      <motion.div layout className="flex items-center space-x-2">
        <p className="text-sm text-black/60">Write Amount</p>
        <div className="flex w-[70%] items-center justify-end rounded-full bg-[#eee] pl-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full bg-transparent text-black/40 focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <SendButton onClick={handleSend} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuickTransfer;
