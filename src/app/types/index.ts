export interface User {
    id: string;
    name: string;
    email: string;
    nativeLanguage: string;
    targetLanguages: string[];
    level: "beginner" | "intermediate" | "advanced";
    streak: number;
    totalXP: number;
    avatar?: string;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    language: string;
    level: "beginner" | "intermediate" | "advanced";
    category: "vocabulary" | "grammar" | "pronunciation" | "conversation";
    duration: number; // in minutes
    xp: number;
    completed: boolean;
    progress: number; // 0-100
    exercises: Exercise[];
}

export interface Exercise {
    id: string;
    type:
        | "multiple-choice"
        | "fill-blank"
        | "translation"
        | "listening"
        | "speaking";
    question: string;
    options?: string[];
    correctAnswer: string;
    explanation?: string;
    points: number;
    completed: boolean;
}

export interface Progress {
    userId: string;
    language: string;
    level: string;
    totalXP: number;
    lessonsCompleted: number;
    streak: number;
    weeklyGoal: number;
    weeklyProgress: number;
    strengths: string[];
    weaknesses: string[];
}

export interface PracticeSession {
    id: string;
    userId: string;
    language: string;
    type: "review" | "new" | "mixed";
    startTime: Date;
    endTime?: Date;
    exercises: Exercise[];
    score: number;
    xpEarned: number;
}
