"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import AnalysisForm from "@/components/AnalysisForm";
import LoadingAnimation from "@/components/LoadingAnimation";
import ResultsPanel, { AnalysisResult } from "@/components/ResultsPanel";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastQuery, setLastQuery] = useState({ acquirer: "", target: "" });

  const handleAnalysis = async (acquirer: string, target: string) => {
    setIsLoading(true);
    setResults(null);
    setError(null);
    setLastQuery({ acquirer, target });

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ acquirer, target }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(
          errData.error || `Erreur serveur (${response.status})`
        );
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur inattendue est survenue."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative">
      <Header />
      <AnalysisForm onSubmit={handleAnalysis} isLoading={isLoading} />

      {/* Error Display */}
      <AnimatePresence>
        {error && (
          <div className="max-w-2xl mx-auto px-4 mt-8 relative z-10">
            <div
              className="glass-card text-center"
              style={{ borderColor: "rgba(255, 107, 107, 0.3)" }}
            >
              <p className="text-sm" style={{ color: "#ff6b6b" }}>
                ⚠️ {error}
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {results && !isLoading && (
          <ResultsPanel
            results={results}
            acquirer={lastQuery.acquirer}
            target={lastQuery.target}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="text-center py-8 relative z-10">
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          M&A Intelligence Server — Powered by AI
        </p>
      </footer>
    </main>
  );
}
