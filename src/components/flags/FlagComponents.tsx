import React from "react";
import usFlag from "../../assets/flags/us.svg";
import deFlag from "../../assets/flags/de.svg";
import frFlag from "../../assets/flags/fr.svg";
import itFlag from "../../assets/flags/it.svg";
import chFlag from "../../assets/flags/ch.svg";
import plFlag from "../../assets/flags/pl.svg";

interface FlagProps {
    className?: string;
}

// United States Flag - using professional flag-icons
export const USFlag: React.FC<FlagProps> = ({ className = "w-5 h-4" }) => (
    <img
        src={usFlag}
        alt="US Flag"
        className={`${className} rounded-sm shadow-sm border border-gray-200 object-cover`}
    />
);

// German Flag - using professional flag-icons
export const GermanFlag: React.FC<FlagProps> = ({ className = "w-5 h-4" }) => (
    <img
        src={deFlag}
        alt="German Flag"
        className={`${className} rounded-sm shadow-sm border border-gray-200 object-cover`}
    />
);

// French Flag - using professional flag-icons
export const FrenchFlag: React.FC<FlagProps> = ({ className = "w-5 h-4" }) => (
    <img
        src={frFlag}
        alt="French Flag"
        className={`${className} rounded-sm shadow-sm border border-gray-200 object-cover`}
    />
);

// Italian Flag - using professional flag-icons
export const ItalianFlag: React.FC<FlagProps> = ({ className = "w-5 h-4" }) => (
    <img
        src={itFlag}
        alt="Italian Flag"
        className={`${className} rounded-sm shadow-sm border border-gray-200 object-cover`}
    />
);

// Swiss Flag - using professional flag-icons
export const SwissFlag: React.FC<FlagProps> = ({ className = "w-5 h-4" }) => (
    <img
        src={chFlag}
        alt="Swiss Flag"
        className={`${className} rounded-sm shadow-sm border border-gray-200 object-cover`}
    />
);

// Polish Flag - using professional flag-icons
export const PolishFlag: React.FC<FlagProps> = ({ className = "w-5 h-4" }) => (
    <img
        src={plFlag}
        alt="Polish Flag"
        className={`${className} rounded-sm shadow-sm border border-gray-200 object-cover`}
    />
);
