import { useTranslation } from "react-i18next";
import { getPortfolioData } from "@/data/portfolioData";

export function usePortfolioData() {
  const { i18n } = useTranslation();
  return getPortfolioData(i18n.resolvedLanguage ?? i18n.language);
}
