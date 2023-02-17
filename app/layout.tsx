import "./globals.css";

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
          <header></header>
          <main className="flex-grow flex flex-col items-center justify-center relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
