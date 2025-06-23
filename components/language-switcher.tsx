"use client";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Remove current locale from path and get the rest
  const getBasePath = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (languages.some((l) => l.code === segments[0])) {
      segments.shift();
    }
    return "/" + segments.join("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(`/${locale}${getBasePath()}`);
  };

  // Detect current language from URL
  const currentLang = (() => {
    const segments = pathname.split("/").filter(Boolean);
    return languages.find((l) => l.code === segments[0])?.code || "fr";
  })();

  return (
    <select
      onChange={handleChange}
      value={currentLang}
      className="border rounded px-2 py-1 text-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
