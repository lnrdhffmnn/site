import "./globals.css";
import { JetBrains_Mono } from "@next/font/google";
import Header from "./components/header";

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
          <main className="flex-grow flex flex-col items-center justify-center relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
