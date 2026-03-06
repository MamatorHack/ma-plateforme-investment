"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnalysisFormProps {
    onSubmit: (acquirer: string, target: string) => void;
    isLoading: boolean;
}

export default function AnalysisForm({ onSubmit, isLoading }: AnalysisFormProps) {
    const [acquirer, setAcquirer] = useState("");
    const [target, setTarget] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!acquirer.trim() || !target.trim()) {
            setError("Veuillez renseigner les deux champs pour lancer l'analyse.");
            return;
        }

        onSubmit(acquirer.trim(), target.trim());
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
        >
            <div className="glass-card">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {/* Acquéreur */}
                    <div className="space-y-2">
                        <label
                            htmlFor="acquirer"
                            className="block text-xs tracking-widest uppercase"
                            style={{
                                fontFamily: "var(--font-orbitron)",
                                color: "#00FFCC",
                            }}
                        >
                            Acquéreur
                        </label>
                        <input
                            id="acquirer"
                            type="text"
                            className="glow-input"
                            placeholder="Ex: Microsoft, LVMH..."
                            value={acquirer}
                            onChange={(e) => setAcquirer(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    {/* Cible */}
                    <div className="space-y-2">
                        <label
                            htmlFor="target"
                            className="block text-xs tracking-widest uppercase"
                            style={{
                                fontFamily: "var(--font-orbitron)",
                                color: "#B026FF",
                            }}
                        >
                            Cible
                        </label>
                        <input
                            id="target"
                            type="text"
                            className="glow-input"
                            placeholder="Ex: Activision, Tiffany..."
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <motion.p
                        className="text-sm text-center mb-4"
                        style={{ color: "#ff6b6b" }}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {error}
                    </motion.p>
                )}

                {/* Submit Button */}
                <div className="flex justify-center">
                    <motion.button
                        type="submit"
                        className="glow-button"
                        disabled={isLoading}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-3">
                                <svg
                                    className="animate-spin h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                ANALYSE EN COURS...
                            </span>
                        ) : (
                            "LANCER L'AUDIT"
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.form>
    );
}
