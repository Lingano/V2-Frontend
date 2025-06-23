import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
    const { t } = useTranslation();

    // Mock data - replace with real data from your API
    const userData = {
        name: "John Doe",
        streak: 7,
        totalXP: 1250,
        weeklyGoal: 5,
        weeklyProgress: 3,
        currentLevel: "Intermediate",
        nextLevelXP: 1500,
        completedLessons: 24,
        totalLessons: 45,
    };

    const recentLessons = [
        {
            id: 1,
            title: "Basic Greetings",
            language: "Spanish",
            progress: 100,
            xp: 50,
        },
        {
            id: 2,
            title: "Present Tense",
            language: "Spanish",
            progress: 75,
            xp: 40,
        },
        {
            id: 3,
            title: "Food Vocabulary",
            language: "Spanish",
            progress: 50,
            xp: 30,
        },
    ];

    const achievements = [
        {
            id: 1,
            title: "First Lesson",
            description: "Complete your first lesson",
            earned: true,
        },
        {
            id: 2,
            title: "Week Streak",
            description: "Study for 7 days in a row",
            earned: true,
        },
        {
            id: 3,
            title: "Speed Learner",
            description: "Complete 10 lessons in a day",
            earned: false,
        },
    ];

    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="space-y-8">
                {/* Welcome Section */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">
                        Welcome back, {userData.name}! 🎉
                    </h1>
                    <p className="text-base-content/70">
                        Ready to continue your language learning journey?
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Current Streak
                            </h2>
                            <div className="text-3xl font-bold">
                                {userData.streak} days
                            </div>
                            <p className="text-sm text-success">
                                📈 Keep it up!
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Total XP
                            </h2>
                            <div className="text-3xl font-bold">
                                {userData.totalXP}
                            </div>
                            <p className="text-sm opacity-70">
                                Level: {userData.currentLevel}
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Weekly Goal
                            </h2>
                            <div className="text-3xl font-bold">
                                {userData.weeklyProgress}/{userData.weeklyGoal}
                            </div>
                            <progress
                                className="progress progress-success w-full mt-2"
                                value={userData.weeklyProgress}
                                max={userData.weeklyGoal}
                            ></progress>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-70">
                                Lessons Completed
                            </h2>
                            <div className="text-3xl font-bold">
                                {userData.completedLessons}/
                                {userData.totalLessons}
                            </div>
                            <p className="text-sm opacity-70">
                                {Math.round(
                                    (userData.completedLessons /
                                        userData.totalLessons) *
                                        100
                                )}
                                % complete
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Quick Actions</h2>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-primary btn-lg">
                                Continue Learning
                            </button>
                            <button className="btn btn-outline btn-lg">
                                Practice Review
                            </button>
                            <button className="btn btn-outline btn-lg">
                                Take Quiz
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Lessons */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Recent Lessons</h2>
                            <div className="space-y-4">
                                {recentLessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className="bg-base-200 p-4 rounded-lg"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">
                                                {lesson.title}
                                            </span>
                                            <div className="badge badge-primary">
                                                {lesson.language}
                                            </div>
                                        </div>
                                        <progress
                                            className="progress progress-success w-full mb-2"
                                            value={lesson.progress}
                                            max={100}
                                        ></progress>
                                        <p className="text-sm opacity-70">
                                            {lesson.progress}% complete •{" "}
                                            {lesson.xp} XP
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Achievements</h2>
                            <div className="space-y-4">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.id}
                                        className={`p-4 rounded-lg ${
                                            achievement.earned
                                                ? "bg-success/10 border border-success/20"
                                                : "bg-base-200"
                                        }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-semibold">
                                                    {achievement.title}
                                                </span>
                                                <p className="text-sm opacity-70">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                            <div
                                                className={`badge ${
                                                    achievement.earned
                                                        ? "badge-success"
                                                        : "badge-ghost"
                                                }`}
                                            >
                                                {achievement.earned
                                                    ? "Earned"
                                                    : "Locked"}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
