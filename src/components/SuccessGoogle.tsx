import React from "react";
import { useTranslation } from "react-i18next";

export const SuccessGoogle: React.FC = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    setTimeout(() => window.close(), 1000);
  }, []);
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <h1 className="text-2xl">{t("googleSuccess")}</h1>
    </div>
  );
};
