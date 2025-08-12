"use client";

import { Bitcoin, Coins, CircleDollarSign } from "lucide-react";

export default function HomePage() {
  const cryptoStats = [
    { name: "Bitcoin", icon: Bitcoin, price: "$29,482" },
    { name: "Ethereum", icon: Coins, price: "$1,845" },
    { name: "Litecoin", icon: CircleDollarSign, price: "$92" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Crypto Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cryptoStats.map((crypto) => {
          const Icon = crypto.icon;
          return (
            <div
              key={crypto.name}
              className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <Icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h2 className="text-xl font-semibold">{crypto.name}</h2>
              <p className="text-lg">{crypto.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
