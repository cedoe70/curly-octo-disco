// app/page.tsx
"use client";

import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Preloader } from "@/components/Preloader";
import { Button } from "@/components/ui/button";
import { Bitcoin, Ethereum, Litecoin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Preloader />
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Floating crypto icons */}
        <div
          aria-hidden="true"
          className="absolute top-10 left-10 animate-float opacity-30"
          style={{ animationDuration: "6s" }}
        >
          <Bitcoin size={64} className="text-white" />
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-20 right-20 animate-float opacity-20"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        >
          <Ethereum size={72} className="text-white" />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-1/3 animate-float opacity-25"
          style={{ animationDuration: "7s", animationDelay: "1s" }}
        >
          <Litecoin size={56} className="text-white" />
        </div>

        <h1 className="text-5xl font-bold mb-6 text-center max-w-xl">
          Welcome to <span className="text-safeGreen">SafeChain</span> Crypto Trading Platform
        </h1>
        <p className="mb-10 text-lg max-w-md text-center opacity-80">
          Trade cryptocurrencies with confidence on a modern, secure, and professional platform.
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </Button>
          <Button variant="outline">Get Started</Button>
        </div>
      </main>
      <footer className="bg-black/60 p-6 text-center text-white/70">
        &copy; {new Date().getFullYear()} SafeChain Crypto. All rights reserved.
      </footer>
    </>
  );
}
