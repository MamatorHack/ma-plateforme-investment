"use client";

import { motion } from "framer-motion";

export default function LoadingAnimation() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center py-20 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Radar Container */}
            <div className="relative w-56 h-56">
                {/* Outer ring */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        border: "1px solid rgba(0, 255, 204, 0.15)",
                    }}
                />

                {/* Middle ring */}
                <div
                    className="absolute rounded-full"
                    style={{
                        inset: "20%",
                        border: "1px solid rgba(0, 255, 204, 0.2)",
                    }}
                />

                {/* Inner ring */}
                <div
                    className="absolute rounded-full"
                    style={{
                        inset: "40%",
                        border: "1px solid rgba(0, 255, 204, 0.25)",
                    }}
                />

                {/* Center dot */}
                <div
                    className="absolute rounded-full"
                    style={{
                        inset: "48%",
                        background: "#00FFCC",
                        boxShadow: "0 0 15px rgba(0, 255, 204, 0.8)",
                    }}
                />

                {/* Cross lines */}
                <div
                    className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2"
                    style={{ background: "rgba(0, 255, 204, 0.08)" }}
                />
                <div
                    className="absolute left-0 top-1/2 w-full h-px -translate-y-1/2"
                    style={{ background: "rgba(0, 255, 204, 0.08)" }}
                />

                {/* Sweep line */}
                <motion.div
                    className="absolute left-1/2 top-1/2 origin-bottom-left"
                    style={{
                        width: "50%",
                        height: "2px",
                        background:
                            "linear-gradient(90deg, #00FFCC, transparent)",
                        transformOrigin: "0% 50%",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Sweep cone glow */}
                <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{
                        width: "50%",
                        height: "50%",
                        background:
                            "conic-gradient(from 0deg, rgba(0, 255, 204, 0.12) 0deg, transparent 40deg)",
                        transformOrigin: "0% 0%",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Pulsing rings */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full"
                        style={{
                            border: "1px solid rgba(0, 255, 204, 0.2)",
                        }}
                        animate={{
                            scale: [0.5, 1.3],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut",
                        }}
                    />
                ))}

                {/* Blinking dots (targets) */}
                {[
                    { top: "25%", left: "65%" },
                    { top: "55%", left: "30%" },
                    { top: "70%", left: "72%" },
                ].map((pos, i) => (
                    <motion.div
                        key={`dot-${i}`}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                            ...pos,
                            background: i % 2 === 0 ? "#00FFCC" : "#B026FF",
                            boxShadow: `0 0 8px ${i % 2 === 0 ? "rgba(0,255,204,0.8)" : "rgba(176,38,255,0.8)"}`,
                        }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.6,
                        }}
                    />
                ))}
            </div>

            {/* Loading Text */}
            <motion.div
                className="mt-10 text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <p
                    className="text-sm tracking-[0.3em] uppercase mb-2"
                    style={{
                        fontFamily: "var(--font-orbitron)",
                        color: "#00FFCC",
                        textShadow: "0 0 10px rgba(0,255,204,0.4)",
                    }}
                >
                    Analyse en cours
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Scan des données stratégiques…
                </p>
            </motion.div>

            {/* Progress bar */}
            <div
                className="mt-6 w-48 h-0.5 rounded-full overflow-hidden"
                style={{ background: "rgba(0,255,204,0.1)" }}
            >
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: "linear-gradient(90deg, #00FFCC, #B026FF)",
                    }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
}
