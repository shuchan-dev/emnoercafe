import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emnoer Cafe",
  description:
    "Emnoer Cafe is an Indonesian company engaged in serving food, drinks and snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-primary`}>
        <div>{children}</div>
        {/* 52:37 */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
