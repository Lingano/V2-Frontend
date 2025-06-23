import React from "react";
import { useTranslation } from "react-i18next";

const Practice: React.FC = () => {
    const { t } = useTranslation();

    const practiceTypes = [
        {
            id: 1,
            title: "Quick Review",
            description: "Review words you've learned recently",
            duration: "5-10 min",
            difficulty: "Mixed",
            icon: "🔄",
        },
        {
            id: 2,
            title: "Vocabulary Drill",
            description: "Practice vocabulary with flashcards",
            duration: "10-15 min",
            difficulty: "Easy",
            icon: "📚",
        },
        {
            id: 3,
            title: "Grammar Challenge",
            description: "Test your grammar knowledge",
            duration: "15-20 min",
            difficulty: "Hard",
            icon: "✏️",
        },
        {
            id: 4,
            title: "Listening Practice",
            description: "Improve your listening skills",
            duration: "10-15 min",
            difficulty: "Medium",
            icon: "🎧",
        },
    ];

    const recentPractice = [
        { date: "2024-01-15", type: "Vocabulary", score: 85, xp: 30 },
        { date: "2024-01-14", type: "Grammar", score: 92, xp: 45 },
        { date: "2024-01-13", type: "Listening", score: 78, xp: 35 },
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "badge-success";
            case "Medium":
                return "badge-warning";
            case "Hard":
                return "badge-error";
            default:
                return "badge-primary";
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Practice</h1>
                    <p className="text-base-content/70">
                        Strengthen your skills with targeted practice sessions
                    </p>
                </div>

                {/* Practice Types */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {practiceTypes.map((practice) => (
                        <div
                            key={practice.id}
                            className="card bg-base-100 shadow-lg"
                        >
                            <div className="card-body">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-4xl">
                                        {practice.icon}
                                    </div>
                                    <div
                                        className={`badge ${getDifficultyColor(
                                            practice.difficulty
                                        )}`}
                                    >
                                        {practice.difficulty}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h2 className="card-title mb-2">
                                        {practice.title}
                                    </h2>
                                    <p className="text-base-content/70 mb-2">
                                        {practice.description}
                                    </p>
                                    <p className="text-sm text-base-content/50">
                                        {practice.duration}
                                    </p>
                                </div>

                                <button className="btn btn-primary btn-lg w-full">
                                    Start Practice
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Practice Sessions */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-4">
                            Recent Practice Sessions
                        </h2>
                        <div className="space-y-4">
                            {recentPractice.map((session, index) => (
                                <div
                                    key={index}
                                    className="bg-base-200 p-4 rounded-lg"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <div className="font-semibold">
                                                {session.type} Practice
                                            </div>
                                            <div className="text-sm text-base-content/70">
                                                {session.date}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-semibold">
                                                {session.score}%
                                            </div>
                                            <div className="text-sm text-base-content/70">
                                                +{session.xp} XP
                                            </div>
                                        </div>
                                    </div>
                                    <progress
                                        className="progress progress-success w-full"
                                        value={session.score}
                                        max={100}
                                    ></progress>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;
