import { useTranslation } from "react-i18next";

const langs: string[] = ["ro", "ru", "en"];

export const usei18nUtil = () => {
    const { i18n, t } = useTranslation();
    const lang = localStorage.getItem("beauty-i18n-Lang") || "ro";

    const changeLang = (lang: "en" | "ro" | "ru") => {
        i18n.changeLanguage(lang);
        window.localStorage.setItem("beauty-i18n-Lang", lang);
        const paths = window.location.pathname
            .split("/")
            .filter((v) => v !== "");

        if (lang === paths[0]) return;

        if (!langs.includes(paths[0]))
            window.location.pathname = `${lang}/${paths.join("/")}`;

        if (langs.includes(paths[0]))
            window.location.pathname = `${lang}/${paths
                .slice(1, paths.length)
                .join("/")}`;
    };

    const setLangUrl = (lang: "en" | "ro" | "ru") => {
        i18n.changeLanguage(lang);
    };

    return { changeLang, lang, setLangUrl, t };
};
