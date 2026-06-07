import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <div className="text-7xl font-display font-bold text-gradient">404</div>
        <p className="mt-3 text-muted-foreground">{t("notFound.message")}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white"
        >
          {t("notFound.home")}
        </Link>
      </div>
    </div>
  );
}
