import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./(marketing)/_components/header";
import Footer from "./(marketing)/_components/footer";

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary`}>
        <header>
          <Header />
        </header>
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
