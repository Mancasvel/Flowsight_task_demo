import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowSight Tasks — Task & sprint focus",
  description:
    "Ticket-level activity, per-worker category mix, and sprint planning hints for product teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
