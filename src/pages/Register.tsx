// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Cropper as ReactCropper } from "react-cropper";
import LanguageSwitcher from "../components/LanguageSwitcher";

// Utility to create a cropped image blob
async function getCroppedImg(imageSrc: string, cropper: any): Promise<Blob> {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
    });
    // For react-cropper we can directly get canvas from instance
    const canvas = cropper.getCroppedCanvas({ width: 200, height: 200 });
    return new Promise<Blob>((resolve, reject) =>
        canvas.toBlob(
            (blob) => (blob ? resolve(blob) : reject(new Error("Crop failed"))),
            "image/jpeg"
        )
    );
}

const Register = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [profileFile, setProfileFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const cropperRef = useRef<any>(null);
    const [croppedBlob, setCroppedBlob] = useState<Blob | null>(null);
    const navigate = useNavigate();
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    // Handle file selection and load image
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setProfileFile(file);
        // reset preview & blob
        setPreview(null);
        setCroppedBlob(null);
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => setImageSrc(reader.result as string);
        } else {
            setImageSrc(null);
            setPreview(null);
            setCroppedBlob(null);
        }
        // reset crop states when switching file
        setCroppedBlob(null);
    }; // Before submitting, use croppedBlob if available
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !confirm) {
            setError(t("auth.register.errors.allFieldsRequired"));
            return;
        }
        if (password !== confirm) {
            setError(t("auth.register.errors.passwordMismatch"));
            return;
        }
        setLoading(true);
        setError("");
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            if (croppedBlob && profileFile) {
                const fileName = profileFile.name;
                formData.append(
                    "avatar",
                    new File([croppedBlob], fileName, {
                        type: croppedBlob.type,
                    })
                );
            } else if (profileFile) {
                formData.append("avatar", profileFile);
            }

            const response = await fetch(`${apiBaseUrl}/api/auth/register`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (response.ok && data.token) {
                localStorage.setItem("token", data.token);
                navigate("/profile");
            } else {
                setError(
                    data.message || t("auth.register.errors.registrationFailed")
                );
            }
        } catch (err: any) {
            setError(err.message || t("auth.register.errors.unexpected"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 p-4">
            {/* Language Switcher */}
            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>

            <div className="max-w-lg w-full space-y-8">
                <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md max-w-md w-full">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center text-primary mb-4">
                            {t("auth.register.title")}
                        </h1>{" "}
                        <p className="text-center text-base-content mb-6">
                            {t("auth.register.subtitle")}
                        </p>
                        {error && (
                            <div
                                role="alert"
                                className="alert alert-error mb-4"
                            >
                                <span>{error}</span>
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-control mb-4">
                                <label className="label justify-center">
                                    <span className="label-text text-base-content">
                                        {t("auth.register.profilePicture")}
                                    </span>
                                </label>
                                {/* Multiple Croppers */}
                                {imageSrc && !preview && (
                                    <div className="mb-4">
                                        <ReactCropper
                                            ref={cropperRef}
                                            src={imageSrc}
                                            style={{
                                                height: 300,
                                                width: "100%",
                                            }}
                                            aspectRatio={1}
                                            guides
                                            viewMode={1}
                                            background={false}
                                            autoCropArea={1}
                                        />{" "}
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary mt-2"
                                            onClick={async () => {
                                                const cropperInstance =
                                                    cropperRef.current?.cropper;
                                                if (!cropperInstance) return;
                                                const blob =
                                                    await getCroppedImg(
                                                        imageSrc,
                                                        cropperInstance
                                                    );
                                                setCroppedBlob(blob);
                                                setPreview(
                                                    URL.createObjectURL(blob)
                                                );
                                            }}
                                        >
                                            {t("auth.register.crop")}
                                        </button>
                                    </div>
                                )}
                                {/* Preview */}
                                {preview && (
                                    <div className="flex justify-center mb-4">
                                        <div className="avatar">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                                                <img
                                                    src={preview}
                                                    alt="avatar preview"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}{" "}
                                {preview && (
                                    <div className="flex justify-center mb-4">
                                        <button
                                            className="btn btn-sm btn-secondary"
                                            onClick={() => {
                                                setPreview(null);
                                                setCroppedBlob(null);
                                            }}
                                        >
                                            {t("auth.register.reCrop")}
                                        </button>
                                    </div>
                                )}
                                {/* File input */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="file-input file-input-bordered w-full bg-base-100/50 mt-2"
                                    onChange={onFileChange}
                                />
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        {t("auth.register.name")}
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={t(
                                        "auth.register.namePlaceholder"
                                    )}
                                    className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        {t("auth.register.email")}
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t(
                                        "auth.register.emailPlaceholder"
                                    )}
                                    className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        {t("auth.register.password")}
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder={t(
                                        "auth.register.passwordPlaceholder"
                                    )}
                                    className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-control mb-6">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        {t("auth.register.confirmPassword")}
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    placeholder={t(
                                        "auth.register.confirmPasswordPlaceholder"
                                    )}
                                    className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                    required
                                    disabled={loading}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loading loading-spinner"></span>
                                    ) : (
                                        t("auth.register.registerButton")
                                    )}
                                </button>
                            </div>

                            <div className="text-sm flex justify-between mt-4">
                                <button
                                    type="button"
                                    className="link link-hover text-primary"
                                    onClick={() => navigate("/login")}
                                >
                                    {t("auth.register.alreadyHaveAccount")}
                                </button>{" "}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
