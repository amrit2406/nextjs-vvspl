"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100]">
      {/* Trigger Button - Clean & Round */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF7E00] text-white shadow-lg hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <FiX size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute left-full top-1/2 -translate-y-1/2 w-[340px] h-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#044DB6] p-4 text-white">
              <h3 className="font-bold text-sm tracking-wide">VVSPL Support</h3>
              <p className="text-[11px] opacity-80">Typically replies in a few minutes</p>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto">
              <div className="inline-block bg-white border border-slate-200 p-3 rounded-lg text-sm text-slate-700 max-w-[85%]">
                Hi! How can we help you today?
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 text-sm outline-none text-slate-600"
              />
              <button className="text-[#FF7E00] p-1 hover:bg-orange-50 rounded-md transition-colors">
                <FiSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;