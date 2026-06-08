import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
 const currentLang = i18n.resolvedLanguage ?? i18n.language ?? "en";

document.documentElement.lang =
  currentLang.startsWith("de") ? "de" : "en";
  }, [i18n.language, i18n.resolvedLanguage]);

  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </ThemeProvider>
  );
}
