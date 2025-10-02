// src/clerkStyles/clerkAppearance.ts
import { dark } from "@clerk/themes";

export const clerkSignAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "#7CF9C2",
    colorText: "#F3EAD7",
    colorBackground: "#0B1020",
    borderRadius: "14px",
  },
  elements: {
    rootBox: { width: "100%" },

    card: {
      background: "rgba(13, 34, 56, 0.85)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 14px 44px rgba(0,0,0,0.45)",
      backdropFilter: "blur(8px)",
      borderRadius: "18px",
      padding: "28px",
      maxWidth: "520px",
    },

    headerTitle: { color: "#F3EAD7", fontSize: "28px", lineHeight: "36px" },
    headerSubtitle: {
      color: "rgba(243,234,215,0.80)",
      fontSize: "16px",
      lineHeight: "24px",
      marginTop: "4px",
    },

    form: { gap: "18px" },
    formFieldLabel: { color: "#F3EAD7", fontSize: "14px" },
    formFieldInput: {
      backgroundColor: "#0D2238",
      color: "#F3EAD7",
      border: "2px solid rgba(124,249,194,0.35)",
      height: "56px",
      padding: "14px 16px",
      fontSize: "16px",
      borderRadius: "12px",
    },
    formFieldInput__error: { borderColor: "#ef4444" },

    formButtonPrimary: {
      backgroundColor: "#7CF9C2",
      color: "#041018",
      borderRadius: "14px",
      height: "56px",
      fontWeight: 800,
      fontSize: "16px",
    },

    footer: {
      borderTop: "1px solid rgba(255,255,255,0.06)",
      paddingTop: "16px",
    },
    footerActionText: { color: "rgba(243,234,215,0.85)", fontSize: "14px" },
    footerActionLink: { color: "#7CF9C2", fontSize: "14px" },

    dividerText: { color: "rgba(243,234,215,0.7)", fontSize: "14px" },
    dividerLine: { backgroundColor: "rgba(255,255,255,0.08)" },

    socialButtonsBlockButton: {
      height: "52px",
      fontSize: "16px",
      borderRadius: "12px",
    },

    socialButtonsBlockButton__google: {
      backgroundColor: "#ffffff",
      color: "#111827",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    },
    socialButtonsBlockButton__google__hover: {
      backgroundColor: "#f5f5f5",
      borderColor: "rgba(0,0,0,0.12)",
    },

    socialButtonsProviderButton__google: {
      backgroundColor: "#ffffff",
      color: "#111827",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    },
    socialButtonsProviderButton__google__hover: {
      backgroundColor: "#f5f5f5",
      borderColor: "rgba(0,0,0,0.12)",
    },
    socialButtonsProviderIcon__google: { filter: "none" },
    formField__firstName: { display: "none" },
    formFieldLabel__firstName: { display: "none" },
    formFieldInput__firstName: { display: "none" },

    formField__lastName: { display: "none" },
    formFieldLabel__lastName: { display: "none" },
    formFieldInput__lastName: { display: "none" },
  },
} as const;
