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
      className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-200"
    >
      <span>{flag}</span>
      <span>{label}</span>
    </button>
  );
}
