"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../i18n/navigation";

const localeConfig = {
  en: { flag: "🇬🇧", label: "EN" },
  id: { flag: "🇮🇩", label: "ID" },
} as const;

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "id" : "en";
  const { flag, label } = localeConfig[nextLocale];

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleSwitch}
      aria-label={`Switch to ${nextLocale}`}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all duration-200 hover:scale-105"
    >
      <span className="text-base">{flag}</span>
      <span className="font-semibold">{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    </button>
  );
}
