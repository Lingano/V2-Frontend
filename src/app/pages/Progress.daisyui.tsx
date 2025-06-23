import React from "react";
import { useTranslation } from "react-i18next";

const Progress: React.FC = () => {
    const { t } = useTranslation();

    const overallStats = {
        totalXP: 1250,
        streak: 7,
        lessonsCompleted: 24,
        averageScore: 87,
        studyTime: 45, // hours
    };

    const skillProgress = [
        { skill: "Vocabulary", level: 65, xp: 450 },
        { skill: "Grammar", level: 72, xp: 380 },
        { skill: "Listening", level: 58, xp: 290 },
        { skill: "Speaking", level: 45, xp: 130 },
    ];

    const weeklyActivity = [
        { day: "Mon", xp: 50, lessons: 2 },
        { day: "Tue", xp: 75, lessons: 3 },
        { day: "Wed", xp: 0, lessons: 0 },
        { day: "Thu", xp: 60, lessons: 2 },
        { day: "Fri", xp: 90, lessons: 4 },
        { day: "Sat", xp: 45, lessons: 2 },
        { day: "Sun", xp: 30, lessons: 1 },
    ];

    const achievements = [
        {
            title: "First Steps",
            description: "Complete your first lesson",
            earned: true,
        },
        {
            title: "Consistent Learner",
            description: "Study for 7 days straight",
            earned: true,
        },
        {
            title: "Vocabulary Master",
            description: "Learn 100 new words",
            earned: false,
        },
        {
            title: "Grammar Guru",
            description: "Perfect score on 5 grammar lessons",
            earned: false,
        },
    ];

    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
                    <p className="text-base-content/70">
                        Track your learning journey and achievements
                    </p>
                </div>

                {/* Overall Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Total XP
                            </h2>
                            <div className="text-3xl font-bold">
                                {overallStats.totalXP}
                            </div>
                            <p className="text-sm opacity-70">Keep learning!</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Current Streak
                            </h2>
                            <div className="text-3xl font-bold">
                                {overallStats.streak} days
                            </div>
                            <p className="text-sm opacity-70">🔥 On fire!</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Lessons Done
                            </h2>
                            <div className="text-3xl font-bold">
                                {overallStats.lessonsCompleted}
                            </div>
                            <p className="text-sm opacity-70">
                                Great progress!
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Average Score
                            </h2>
                            <div className="text-3xl font-bold">
                                {overallStats.averageScore}%
                            </div>
                            <p className="text-sm opacity-70">Excellent!</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Study Time
                            </h2>
                            <div className="text-3xl font-bold">
                                {overallStats.studyTime}h
                            </div>
                            <p className="text-sm opacity-70">This month</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Skill Progress */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title mb-6">Skill Breakdown</h2>
                            <div className="space-y-6">
                                {skillProgress.map((skill) => (
                                    <div key={skill.skill} className="w-full">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">
                                                {skill.skill}
                                            </span>
                                            <span className="text-sm text-base-content/70">
                                                {skill.xp} XP
                                            </span>
                                        </div>
                                        <progress
                                            className="progress progress-primary w-full"
                                            value={skill.level}
                                            max={100}
                                        ></progress>
                                        <p className="text-sm text-base-content/50 mt-1">
                                            Level {Math.floor(skill.level / 10)}{" "}
                                            - {skill.level}%
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Weekly Activity */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title mb-6">
                                This Week's Activity
                            </h2>
                            <div className="grid grid-cols-7 gap-4 text-center">
                                {weeklyActivity.map((day) => (
                                    <div
                                        key={day.day}
                                        className="flex flex-col items-center space-y-2"
                                    >
                                        <div
                                            className={`radial-progress ${
                                                day.xp > 0
                                                    ? "text-success"
                                                    : "text-base-300"
                                            }`}
                                            style={
                                                {
                                                    "--value": Math.min(
                                                        (day.xp / 100) * 100,
                                                        100
                                                    ),
                                                } as React.CSSProperties
                                            }
                                        >
                                            <span className="text-xs font-bold">
                                                {day.xp > 0 ? day.xp : "0"}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold">
                                            {day.day}
                                        </span>
                                        <span className="text-xs text-base-content/50">
                                            {day.lessons} lessons
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-lg border ${
                                        achievement.earned
                                            ? "bg-success/10 border-success/20"
                                            : "bg-base-200 border-base-300"
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                achievement.earned
                                                    ? "bg-success text-success-content"
                                                    : "bg-base-300 text-base-content"
                                            }`}
                                        >
                                            <span className="text-lg">
                                                {achievement.earned
                                                    ? "🏆"
                                                    : "🔒"}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold">
                                                {achievement.title}
                                            </div>
                                            <div className="text-sm text-base-content/70">
                                                {achievement.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
