import React from "react";
import { useTranslation } from "react-i18next";

// Translation test component to verify all keys work
export function TranslationTest() {
    const { t } = useTranslation();

    const loginKeys = [
        "auth.login.title",
        "auth.login.subtitle",
        "auth.login.email",
        "auth.login.password",
        "auth.login.emailPlaceholder",
        "auth.login.passwordPlaceholder",
        "auth.login.loginButton",
        "auth.login.createAccount",
        "auth.login.forgotPassword",
        "auth.login.errors.missingFields",
        "auth.login.errors.invalidCredentials",
        "auth.login.errors.unexpected",
    ];

    const registerKeys = [
        "auth.register.title",
        "auth.register.subtitle",
        "auth.register.profilePicture",
        "auth.register.name",
        "auth.register.email",
        "auth.register.password",
        "auth.register.confirmPassword",
        "auth.register.namePlaceholder",
        "auth.register.emailPlaceholder",
        "auth.register.passwordPlaceholder",
        "auth.register.confirmPasswordPlaceholder",
        "auth.register.registerButton",
        "auth.register.alreadyHaveAccount",
        "auth.register.crop",
        "auth.register.reCrop",
        "auth.register.errors.allFieldsRequired",
        "auth.register.errors.passwordMismatch",
        "auth.register.errors.registrationFailed",
        "auth.register.errors.unexpected",
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Translation Test</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Login Keys:</h2>
                <ul className="space-y-1">
                    {loginKeys.map((key) => (
                        <li key={key} className="flex">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded mr-2 min-w-[300px]">
                                {key}
                            </code>
                            <span>: {t(key)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Register Keys:</h2>
                <ul className="space-y-1">
                    {registerKeys.map((key) => (
                        <li key={key} className="flex">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded mr-2 min-w-[300px]">
                                {key}
                            </code>
                            <span>: {t(key)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
