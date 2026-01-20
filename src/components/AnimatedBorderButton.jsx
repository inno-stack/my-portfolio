import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button
      className="relative bg-transparent border border-border text-foreground
  hover:border-primary/50 transition-all duration-100 focus-visible:right-2
  focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50
  disabled:cursor-not-allowed group px-8 py-4 tex-lg font-medium 
  rounded-full overflow-visible animated-border"
    >
      {/* Download CV Button */}
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="198"
          height="58"
          rx="29"
          ry="29"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animated-border-path"
        />
      </svg>

      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-5 h-5" />
        Download CV
      </span>
    </button>
  );
};
