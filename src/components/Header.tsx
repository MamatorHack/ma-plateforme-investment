"use client";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            className="text-center pt-16 pb-10 px-4 relative z-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Top decorative line */}
            <motion.div
                className="mx-auto mb-8 h-px w-40"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, #00FFCC, #B026FF, transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Badge */}
            <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                style={{
                    background: "rgba(0, 255, 204, 0.06)",
                    border: "1px solid rgba(0, 255, 204, 0.15)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
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
                    style={{ color: "#00FFCC", fontFamily: "var(--font-orbitron)" }}
                >
                    Système actif
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4"
                style={{ fontFamily: "var(--font-orbitron)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <span className="gradient-text">M&A</span>{" "}
                <span className="text-white">Intelligence</span>
                <br />
                <span
                    className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                >
                    Server
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-sm md:text-base max-w-xl mx-auto"
                style={{
                    color: "rgba(255, 255, 255, 0.4)",
                    fontFamily: "var(--font-inter)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                Analyse stratégique de fusions-acquisitions propulsée par
                l&apos;intelligence artificielle
            </motion.p>

            {/* Bottom decorative line */}
            <motion.div
                className="mx-auto mt-8 h-px w-60"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, #B026FF, #00FFCC, transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            />
        </motion.header>
    );
}
