"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      gutter={12}
      toastOptions={{
        duration: 3500,
        style: {
          background: "#0E1630",
          color: "#F5F7FF",
          borderRadius: "14px",
          border: "1px solid #273258",
          padding: "10px 14px",
          fontSize: "0.9rem",
          boxShadow:
            "0 18px 45px rgba(0,0,0,0.55), 0 0 0 1px rgba(5,10,25,0.7)",
        },
        success: {
          iconTheme: {
            primary: "#7CF9C2",
            secondary: "#0E1630",
          },
        },
        error: {
          iconTheme: {
            primary: "#fb7185",
            secondary: "#0E1630",
          },
        },
      }}
    />
  );
}
