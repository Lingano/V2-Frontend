import type {
    User,
    Lesson,
    Exercise,
    Progress,
    PracticeSession,
} from "../types";

// Mock API service - replace with real API calls
export class ApiService {
    private static baseUrl =
        process.env.REACT_APP_API_URL || "http://localhost:3001/api";

    // User methods
    static async getCurrentUser(): Promise<User> {
        // Mock implementation
        return {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            nativeLanguage: "en",
            targetLanguages: ["es", "fr"],
            level: "intermediate",
            streak: 7,
            totalXP: 1250,
            avatar: "",
        };
    }

    static async updateUser(
        userId: string,
        userData: Partial<User>
    ): Promise<User> {
        // Mock implementation
        const currentUser = await this.getCurrentUser();
        return { ...currentUser, ...userData };
    }

    // Lesson methods
    static async getLessons(
        language?: string,
        level?: string
    ): Promise<Lesson[]> {
        // Mock implementation
        return [
            {
                id: "1",
                title: "Basic Greetings",
                description:
                    "Learn how to say hello, goodbye, and introduce yourself",
                language: "es",
                level: "beginner",
                category: "vocabulary",
                duration: 15,
                xp: 50,
                completed: true,
                progress: 100,
                exercises: [],
            },
            {
                id: "2",
                title: "Numbers 1-20",
                description: "Master numbers from one to twenty",
                language: "es",
                level: "beginner",
                category: "vocabulary",
                duration: 20,
                xp: 60,
                completed: false,
                progress: 60,
                exercises: [],
            },
        ];
    }

    static async getLesson(lessonId: string): Promise<Lesson> {
        const lessons = await this.getLessons();
        const lesson = lessons.find((l) => l.id === lessonId);
        if (!lesson) throw new Error("Lesson not found");
        return lesson;
    }

    static async updateLessonProgress(
        lessonId: string,
        progress: number
    ): Promise<void> {
        // Mock implementation - would normally update backend
        console.log(`Updating lesson ${lessonId} progress to ${progress}%`);
    }

    // Exercise methods
    static async getExercises(lessonId: string): Promise<Exercise[]> {
        // Mock implementation
        return [
            {
                id: "1",
                type: "multiple-choice",
                question: 'How do you say "Hello" in Spanish?',
                options: ["Hola", "Adiós", "Gracias", "Por favor"],
                correctAnswer: "Hola",
                explanation:
                    "Hola is the most common way to say hello in Spanish.",
                points: 10,
                completed: false,
            },
            {
                id: "2",
                type: "translation",
                question: 'Translate: "Good morning"',
                correctAnswer: "Buenos días",
                explanation:
                    "Buenos días is used to greet someone in the morning.",
                points: 15,
                completed: false,
            },
        ];
    }

    static async submitExercise(
        exerciseId: string,
        answer: string
    ): Promise<{ correct: boolean; explanation?: string }> {
        // Mock implementation
        return {
            correct: Math.random() > 0.3, // 70% chance of being correct
            explanation: "This is a mock explanation for the exercise result.",
        };
    }

    // Progress methods
    static async getUserProgress(
        userId: string,
        language?: string
    ): Promise<Progress> {
        // Mock implementation
        return {
            userId,
            language: language || "es",
            level: "intermediate",
            totalXP: 1250,
            lessonsCompleted: 24,
            streak: 7,
            weeklyGoal: 5,
            weeklyProgress: 3,
            strengths: ["vocabulary", "reading"],
            weaknesses: ["speaking", "listening"],
        };
    }

    // Practice methods
    static async createPracticeSession(
        userId: string,
        type: string,
        language: string
    ): Promise<PracticeSession> {
        // Mock implementation
        return {
            id: Date.now().toString(),
            userId,
            language,
            type: type as "review" | "new" | "mixed",
            startTime: new Date(),
            exercises: await this.getExercises("practice"),
            score: 0,
            xpEarned: 0,
        };
    }

    static async completePracticeSession(
        sessionId: string,
        score: number
    ): Promise<PracticeSession> {
        // Mock implementation
        return {
            id: sessionId,
            userId: "1",
            language: "es",
            type: "review",
            startTime: new Date(Date.now() - 600000), // 10 minutes ago
            endTime: new Date(),
            exercises: [],
            score,
            xpEarned: Math.floor(score * 0.5), // XP based on score
        };
    }
}
