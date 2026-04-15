import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://inboxagent.example"),
  title: {
    default: "InboxAgent | Fire your customer service VA",
    template: "%s | InboxAgent",
  },
  description:
    "InboxAgent is the AI customer service agent that replies, refunds, and resolves tickets while you sleep.",
  openGraph: {
    title: "InboxAgent",
    description:
      "The AI customer service agent that replaces your VA and never sleeps.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary selection:text-on-primary font-body text-on-background bg-background">
        <ModalProvider>
          <CursorGlow />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
