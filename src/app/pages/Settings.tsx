import React from "react";
import { useTranslation } from "react-i18next";

const Settings: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Settings</h1>
                    <p className="text-base-content/70">
                        Customize your learning experience
                    </p>
                </div>

                {/* Profile Settings */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Profile Settings</h2>
                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Display Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your display name"
                                    className="input input-bordered"
                                    defaultValue="John Doe"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    defaultValue="john@example.com"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bio</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered"
                                    placeholder="Tell us about yourself"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Language Settings */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Language Settings</h2>
                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Native Language
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered"
                                    defaultValue="en"
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Learning Language
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered"
                                    defaultValue="es"
                                >
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="it">Italian</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Proficiency Level
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered"
                                    defaultValue="intermediate"
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">
                                        Intermediate
                                    </option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Preferences */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-6">
                            Learning Preferences
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">
                                        Daily Reminders
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Get notified to practice daily
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    defaultChecked
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">
                                        Sound Effects
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Play sounds for correct/incorrect
                                        answers
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    defaultChecked
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">
                                        Streak Freeze
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Protect your streak when you miss a day
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Daily Goal
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered"
                                    defaultValue="5"
                                >
                                    <option value="1">1 lesson per day</option>
                                    <option value="3">3 lessons per day</option>
                                    <option value="5">5 lessons per day</option>
                                    <option value="10">
                                        10 lessons per day
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Privacy Settings */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Privacy Settings</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">
                                        Public Profile
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Allow others to see your profile
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">
                                        Share Progress
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Share your learning progress with
                                        friends
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    defaultChecked
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">
                                        Learning Analytics
                                    </div>
                                    <div className="text-sm text-base-content/70">
                                        Help improve the app with usage data
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Actions */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Account</h2>
                        <div className="space-y-4">
                            <button className="btn btn-outline btn-primary w-full">
                                Export My Data
                            </button>
                            <button className="btn btn-outline btn-warning w-full">
                                Reset Progress
                            </button>
                            <div className="divider"></div>
                            <button className="btn btn-outline btn-error w-full">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end gap-4">
                    <button className="btn btn-outline">Cancel</button>
                    <button className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
