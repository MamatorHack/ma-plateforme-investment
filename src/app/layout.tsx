import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&A Intelligence Server — Fusion-Acquisition Analysis",
  description:
    "Plateforme d'analyse avancée de fusions-acquisitions alimentée par l'intelligence artificielle. Évaluez les synergies, les risques et la compatibilité stratégique entre entreprises.",
  keywords: ["M&A", "fusion", "acquisition", "analyse", "intelligence artificielle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
