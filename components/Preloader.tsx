"use client";

import { Bitcoin, Coins, CircleDollarSign } from "lucide-react";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="flex space-x-8">
        <Bitcoin className="w-12 h-12 text-yellow-400 animate-bounce" />
        <Coins className="w-12 h-12 text-blue-400 animate-bounce delay-150" />
        <CircleDollarSign className="w-12 h-12 text-green-400 animate-bounce delay-300" />
      </div>
    </div>
  );
}
