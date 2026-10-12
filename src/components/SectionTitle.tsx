interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={`mb-8 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-xl"}`}>
      {badge && (
        <span
          className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${
            isDark
              ? "bg-[#FFD147]/20 text-[#FFD147] border border-[#FFD147]/30"
              : "bg-blue-100/80 text-[#14306B]"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-extrabold font-heading leading-tight ${
          isDark ? "text-white" : "text-[#0A1931]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-xs sm:text-sm mt-2 leading-relaxed ${
            isDark ? "text-slate-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
