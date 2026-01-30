import { motion } from "framer-motion";

export default function SkillSignalCard({
  title,
  subtitle,
  strength = "Strong",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl
                 bg-gradient-to-br from-[#0b1220] to-[#020617]
                 border border-white/10
                 px-6 py-5"
    >
      {/* MOVING DOT AROUND WHOLE CARD */}
      <motion.span
        className="absolute top-0 left-0 h-3 w-3 rounded-full bg-cyan-400
                   shadow-[0_0_10px_rgba(34,211,238,0.7)]
                   -translate-x-1/2 -translate-y-1/2"
        animate={{
          left: ["0%", "100%", "100%", "0%", "0%"],
          top:  ["0%", "0%", "100%", "100%", "0%"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* STATIC SIGNAL LINE */}
      <div className="absolute top-6 left-6 h-px w-24
                      bg-gradient-to-r from-cyan-400/60 to-transparent" />

      {/* CONTENT */}
      <div className="pt-10">
        <h3 className="text-lg font-semibold text-white tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
        <p className="mt-3 text-xs uppercase tracking-widest text-cyan-400/70">
          Signal: {strength}
        </p>
      </div>

      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-40 w-40 bg-cyan-400/10 blur-3xl" />
      </div>
    </motion.div>
  );
}
