"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";

const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = ToastPrimitives.Viewport;

function Toast({ children, ...props }: ToastPrimitives.ToastProps) {
  return (
    <ToastPrimitives.Root
      className="bg-gray-800 text-white rounded-md p-4 shadow-lg grid grid-cols-[auto_max-content] items-center gap-4"
      {...props}
    >
      {children}
    </ToastPrimitives.Root>
  );
}

const ToastTitle = ToastPrimitives.Title;
const ToastDescription = ToastPrimitives.Description;

function ToastClose() {
  return (
    <ToastPrimitives.Close asChild>
      <button className="text-white hover:text-red-500">
        <X size={18} />
      </button>
    </ToastPrimitives.Close>
  );
}

function Toaster() {
  return (
    <ToastProvider swipeDirection="right" duration={3000}>
      <ToastViewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[320px] max-w-full z-[9999]" />
    </ToastProvider>
  );
}

export { Toast, ToastTitle, ToastDescription, ToastClose, Toaster };
