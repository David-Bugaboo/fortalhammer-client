import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warhammer Fortaleza",
  description: "Gerenciador de Crusade para Warhammer 40k",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-crimson antialiased">
        {children}
      </body>
    </html>
  );
}
