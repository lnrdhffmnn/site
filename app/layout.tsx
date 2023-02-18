import "./globals.css";
import { JetBrains_Mono } from "@next/font/google";
import Header from "./components/header";

export const revalidate = 604800; // revalidate every 604800 seconds (1 week)

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={`bg-zinc-900 text-white ${jetBrainsMono.className}`}>
        <div className="min-w-full min-h-screen flex flex-col items-stretch justify-start">
          <Header />
          <main className="flex-grow flex flex-col items-center justify-center relative px-8 py-2 w-full max-w-[1000px] mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
