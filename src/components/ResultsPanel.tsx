"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface AnalysisResult {
    executive_summary: string;
    analyse_financiere: string;
    valorisation: string;
    due_diligence: string;
    decision_finale: string;
}

interface ResultsPanelProps {
    results: AnalysisResult;
    acquirer: string;
    target: string;
}

const sections = [
    {
        key: "executive_summary" as keyof AnalysisResult,
        title: "Executive Summary & Thèse d'Investissement",
        icon: "📋",
        accentColor: "#00FFCC",
        number: "01",
    },
    {
        key: "analyse_financiere" as keyof AnalysisResult,
        title: "Analyse Financière",
        icon: "📊",
        accentColor: "#00FFCC",
        number: "02",
    },
    {
        key: "valorisation" as keyof AnalysisResult,
        title: "Valorisation",
        icon: "💰",
        accentColor: "#B026FF",
        number: "03",
    },
    {
        key: "due_diligence" as keyof AnalysisResult,
        title: "Due Diligence Technique",
        icon: "🔍",
        accentColor: "#ff6b6b",
        number: "04",
    },
    {
        key: "decision_finale" as keyof AnalysisResult,
        title: "Décision Finale du Comité",
        icon: "⚖️",
        accentColor: "#00FFCC",
        number: "05",
    },
];

export default function ResultsPanel({
    results,
    acquirer,
    target,
}: ResultsPanelProps) {
    return (
        <motion.div
            className="max-w-5xl mx-auto px-4 py-12 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Results Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                    style={{
                        background: "rgba(0, 255, 204, 0.06)",
                        border: "1px solid rgba(0, 255, 204, 0.15)",
                    }}
                >
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{
                            background: "#00FFCC",
                            boxShadow: "0 0 8px rgba(0, 255, 204, 0.6)",
                        }}
                    />
                    <span
                        className="text-xs tracking-widest uppercase"
                        style={{
                            color: "#00FFCC",
                            fontFamily: "var(--font-orbitron)",
                        }}
                    >
                        Investment Memo
                    </span>
                </div>

                <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                >
                    <span className="gradient-text">{acquirer}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}> × </span>
                    <span className="gradient-text">{target}</span>
                </h2>

                <p
                    className="text-xs mt-2 tracking-wider uppercase"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                >
                    Rapport confidentiel — Comité d&apos;investissement
                </p>

                <div
                    className="mx-auto mt-4 h-px w-40"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, #00FFCC, #B026FF, transparent)",
                    }}
                />
            </motion.div>

            {/* Cards — Full width stacked */}
            <div className="flex flex-col gap-6">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.key}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3 + index * 0.15,
                            ease: "easeOut",
                        }}
                        className="glass-card relative overflow-hidden"
                    >
                        {/* Accent line at top */}
                        <div
                            className="absolute top-0 left-0 right-0 h-px"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${section.accentColor}, transparent)`,
                            }}
                        />

                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <div
                                className="flex items-center justify-center w-8 h-8 rounded-md text-xs font-bold"
                                style={{
                                    fontFamily: "var(--font-orbitron)",
                                    background: `linear-gradient(135deg, ${section.accentColor}22, ${section.accentColor}08)`,
                                    border: `1px solid ${section.accentColor}30`,
                                    color: section.accentColor,
                                }}
                            >
                                {section.number}
                            </div>
                            <div className="icon-badge">{section.icon}</div>
                            <h3
                                className="text-sm tracking-widest uppercase font-semibold"
                                style={{
                                    fontFamily: "var(--font-orbitron)",
                                    color: section.accentColor,
                                }}
                            >
                                {section.title}
                            </h3>
                        </div>

                        {/* Card Content — Rendered Markdown */}
                        <div className="markdown-content">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {results[section.key]}
                            </ReactMarkdown>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
