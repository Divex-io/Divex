interface WateryBackgroundProps {
  opacity?: string;
  darkOpacity?: string;
  className?: string;
  id?: string;
}

export default function WateryBackground({
  opacity = "opacity-5",
  darkOpacity = "dark:opacity-10",
  className = "",
  id = "default",
}: WateryBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 ${opacity} ${darkOpacity} transition-opacity duration-300 ${className}`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Flowing Water Waves */}
          <pattern
            id={`water-waves-${id}`}
            x="0"
            y="0"
            width="100"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 12 Q12 5 25 12 T50 12 Q62 5 75 12 T100 12 Q88 20 75 18 T50 18 Q38 20 25 18 T0 18 Z"
              fill="currentColor"
              fillOpacity="0.3"
            />
            <path
              d="M0 8 Q15 2 30 8 T60 8 Q75 2 90 8 T120 8 Q105 15 90 13 T60 13 Q45 15 30 13 T0 13 Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path
              d="M0 15 Q20 10 40 15 T80 15 Q90 10 100 15 Q85 22 70 20 T40 20 Q25 22 10 20 T0 20 Z"
              fill="currentColor"
              fillOpacity="0.15"
            />
          </pattern>

          {/* Water Ripples */}
          <pattern
            id={`ripples-${id}`}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.15"
            />
            <circle
              cx="20"
              cy="20"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              strokeOpacity="0.1"
            />
            <circle
              cx="20"
              cy="20"
              r="3"
              fill="currentColor"
              fillOpacity="0.05"
            />
          </pattern>

          {/* Bubbles */}
          <pattern
            id={`bubbles-${id}`}
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="15"
              cy="15"
              r="2"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <circle
              cx="45"
              cy="30"
              r="1.5"
              fill="currentColor"
              fillOpacity="0.06"
            />
            <circle
              cx="30"
              cy="50"
              r="1"
              fill="currentColor"
              fillOpacity="0.04"
            />
            <circle
              cx="50"
              cy="10"
              r="0.8"
              fill="currentColor"
              fillOpacity="0.05"
            />
          </pattern>
        </defs>

        {/* Layer the patterns for depth */}
        <rect width="100" height="100" fill={`url(#water-waves-${id})`} />
        <rect
          width="100"
          height="100"
          fill={`url(#ripples-${id})`}
          opacity="0.6"
        />
        <rect
          width="100"
          height="100"
          fill={`url(#bubbles-${id})`}
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
