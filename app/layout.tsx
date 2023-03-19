import "./globals.css";
import "@fontsource/jetbrains-mono/latin.css";
import Header from "./components/header";
import { AnalyticsWrapper } from "./components/analytics";

export const revalidate = 86400; // revalidate every 86400 seconds (1 day)

export const metadata = {
  title: {
    default: "Leonardo Hoffmann Belous",
    template: "%s | Leonardo Hoffmann Belous",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="bg-zinc-900 text-white font-mono">
        <div className="min-w-full min-h-screen flex flex-col items-stretch justify-start">
          <Header />
          <main className="flex-grow flex flex-col items-center justify-center relative px-8 py-2 w-full max-w-[1000px] mx-auto">
            {children}
          </main>
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
