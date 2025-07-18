"use client";

import { motion } from "framer-motion";
import { Fish } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  animated?: boolean;
}

const sizeConfig = {
  sm: {
    icon: "h-5 w-5",
    text: "text-lg",
    spacing: "gap-2",
  },
  md: {
    icon: "h-6 w-6",
    text: "text-xl",
    spacing: "gap-2",
  },
  lg: {
    icon: "h-8 w-8",
    text: "text-2xl",
    spacing: "gap-3",
  },
};

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
  href = "#",
  animated = true,
}: LogoProps) {
  const t = useTranslations("Brand");
  const config = sizeConfig[size];

  const iconElement = (
    <motion.div
      className="flex-shrink-0"
      animate={animated ? { rotate: 360 } : {}}
      transition={animated ? { duration: 0.6 } : {}}
      whileHover={animated ? { scale: 1.1 } : {}}
    >
      <Fish className={cn(config.icon, "text-blue-600")} />
    </motion.div>
  );

  const textElement = variant === "full" && (
    <span
      className={cn(
        config.text,
        "font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300"
      )}
    >
      {t("name")}
    </span>
  );

  const content = (
    <div
      className={cn(
        "flex items-center",
        variant === "full" ? config.spacing : "",
        "group cursor-pointer",
        className
      )}
    >
      {iconElement}
      {textElement}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}

// Specialized variants for common use cases
export function LogoIcon(props: Omit<LogoProps, "variant">) {
  return <Logo {...props} variant="icon" />;
}

export function LogoFull(props: Omit<LogoProps, "variant">) {
  return <Logo {...props} variant="full" />;
}
