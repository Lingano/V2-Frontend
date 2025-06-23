import React from "react";
import { FaPlay, FaLock, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Lessons: React.FC = () => {
    const { t } = useTranslation();

    // Mock lessons data
    const lessons = [
        {
            id: 1,
            title: "Basic Greetings",
            description:
                "Learn how to say hello, goodbye, and introduce yourself",
            level: "beginner",
            duration: 15,
            xp: 50,
            completed: true,
            progress: 100,
            locked: false,
        },
        {
            id: 2,
            title: "Numbers 1-20",
            description: "Master numbers from one to twenty",
            level: "beginner",
            duration: 20,
            xp: 60,
            completed: true,
            progress: 100,
            locked: false,
        },
        {
            id: 3,
            title: "Present Tense Verbs",
            description: "Learn common verbs in present tense",
            level: "beginner",
            duration: 25,
            xp: 75,
            completed: false,
            progress: 60,
            locked: false,
        },
        {
            id: 4,
            title: "Food and Drinks",
            description: "Vocabulary for ordering food and drinks",
            level: "intermediate",
            duration: 30,
            xp: 80,
            completed: false,
            progress: 0,
            locked: false,
        },
        {
            id: 5,
            title: "Past Tense",
            description: "Learn to talk about past events",
            level: "intermediate",
            duration: 35,
            xp: 90,
            completed: false,
            progress: 0,
            locked: true,
        },
    ];

    const getLevelColor = (level: string) => {
        switch (level) {
            case "beginner":
                return "badge-success";
            case "intermediate":
                return "badge-warning";
            case "advanced":
                return "badge-error";
            default:
                return "badge-ghost";
        }
    };

    const getButtonText = (lesson: any) => {
        if (lesson.locked) return "Locked";
        if (lesson.completed) return "Review";
        if (lesson.progress > 0) return "Continue";
        return "Start";
    };

    const getButtonClass = (lesson: any) => {
        if (lesson.locked) return "btn-disabled";
        if (lesson.completed) return "btn-success btn-outline";
        if (lesson.progress > 0) return "btn-primary";
        return "btn-outline btn-primary";
    };

    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Lessons</h1>
                    <p className="text-base-content/70">
                        Choose a lesson to continue your learning journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lessons.map((lesson) => (
                        <div
                            key={lesson.id}
                            className={`card bg-base-100 shadow-lg ${
                                lesson.locked ? "opacity-60" : ""
                            }`}
                        >
                            <div className="card-body">
                                <div className="flex justify-between items-start mb-4">
                                    <div
                                        className={`badge ${getLevelColor(
                                            lesson.level
                                        )}`}
                                    >
                                        {lesson.level}
                                    </div>
                                    {lesson.completed && (
                                        <FaStar className="text-warning" />
                                    )}
                                </div>

                                <div className="mb-4">
                                    <h2 className="card-title mb-2">
                                        {lesson.title}
                                    </h2>
                                    <p className="text-sm text-base-content/70 mb-4">
                                        {lesson.description}
                                    </p>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm text-base-content/70">
                                        <span>{lesson.duration} min</span>
                                        <span>{lesson.xp} XP</span>
                                    </div>

                                    {lesson.progress > 0 &&
                                        !lesson.completed && (
                                            <div>
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value={lesson.progress}
                                                    max={100}
                                                ></progress>
                                                <p className="text-xs text-base-content/50 mt-1">
                                                    {lesson.progress}% complete
                                                </p>
                                            </div>
                                        )}
                                </div>

                                <button
                                    className={`btn w-full ${getButtonClass(
                                        lesson
                                    )}`}
                                    disabled={lesson.locked}
                                >
                                    {lesson.locked ? (
                                        <FaLock className="mr-2" />
                                    ) : (
                                        <FaPlay className="mr-2" />
                                    )}
                                    {getButtonText(lesson)}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Summary */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Your Progress</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-success">
                                    {lessons.filter((l) => l.completed).length}
                                </div>
                                <div className="text-sm text-base-content/70">
                                    Completed
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">
                                    {
                                        lessons.filter(
                                            (l) =>
                                                l.progress > 0 && !l.completed
                                        ).length
                                    }
                                </div>
                                <div className="text-sm text-base-content/70">
                                    In Progress
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-base-content/50">
                                    {
                                        lessons.filter(
                                            (l) => l.progress === 0 && !l.locked
                                        ).length
                                    }
                                </div>
                                <div className="text-sm text-base-content/70">
                                    Not Started
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">
                                    {lessons.reduce(
                                        (sum, l) =>
                                            sum + (l.completed ? l.xp : 0),
                                        0
                                    )}
                                </div>
                                <div className="text-sm text-base-content/70">
                                    Total XP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
