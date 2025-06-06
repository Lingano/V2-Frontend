import React from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDown, IoGlobeOutline } from "react-icons/io5";
import {
    USFlag,
    GermanFlag,
    FrenchFlag,
    ItalianFlag,
    PolishFlag,
} from "./flags";

interface Language {
    code: string;
    name: string;
    FlagComponent: React.FC<{ className?: string }>;
}

const languages: Language[] = [
    { code: "en", name: "English", FlagComponent: USFlag },
    { code: "de", name: "Deutsch", FlagComponent: GermanFlag },
    { code: "fr", name: "Français", FlagComponent: FrenchFlag },
    { code: "it", name: "Italiano", FlagComponent: ItalianFlag },
    { code: "pl", name: "Polski", FlagComponent: PolishFlag },
];

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const currentLanguage =
        languages.find((lang) => lang.code === i18n.language) || languages[0];

    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
    };

    return (
        <div className="dropdown dropdown-end">
            {" "}
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm gap-2"
                aria-label="Language selector"
            >
                <div className="hidden sm:flex items-center gap-2">
                    <currentLanguage.FlagComponent className="w-5 h-4" />
                    <span>{currentLanguage.name}</span>
                </div>
                <div className="sm:hidden">
                    <currentLanguage.FlagComponent className="w-5 h-4" />
                </div>
                <IoChevronDown className="w-3 h-3" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300"
            >
                {languages.map((language) => (
                    <li key={language.code}>
                        <button
                            onClick={() => changeLanguage(language.code)}
                            className={`flex items-center gap-3 ${
                                i18n.language === language.code
                                    ? "active bg-primary text-primary-content"
                                    : ""
                            }`}
                        >
                            <language.FlagComponent className="w-5 h-4" />
                            <span>{language.name}</span>
                            {i18n.language === language.code && (
                                <span className="ml-auto">✓</span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
