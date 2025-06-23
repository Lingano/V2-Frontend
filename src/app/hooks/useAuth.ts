import { useState, useEffect } from "react";
import { User } from "../types";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const useAuth = (): AuthState & {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (userData: Partial<User>) => Promise<void>;
} => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isLoading: true,
        isAuthenticated: false,
    });

    useEffect(() => {
        // Check for existing auth token or session
        const checkAuth = async () => {
            try {
                // Mock auth check - replace with real authentication
                const mockUser: User = {
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

                // Simulate loading delay
                setTimeout(() => {
                    setAuthState({
                        user: mockUser,
                        isLoading: false,
                        isAuthenticated: true,
                    });
                }, 1000);
            } catch (error) {
                setAuthState({
                    user: null,
                    isLoading: false,
                    isAuthenticated: false,
                });
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        setAuthState((prev) => ({ ...prev, isLoading: true }));

        try {
            // Mock login - replace with real authentication
            const mockUser: User = {
                id: "1",
                name: "John Doe",
                email: email,
                nativeLanguage: "en",
                targetLanguages: ["es"],
                level: "beginner",
                streak: 0,
                totalXP: 0,
                avatar: "",
            };

            setAuthState({
                user: mockUser,
                isLoading: false,
                isAuthenticated: true,
            });
        } catch (error) {
            setAuthState({
                user: null,
                isLoading: false,
                isAuthenticated: false,
            });
            throw error;
        }
    };

    const logout = (): void => {
        setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
        });
    };

    const register = async (userData: Partial<User>): Promise<void> => {
        setAuthState((prev) => ({ ...prev, isLoading: true }));

        try {
            // Mock registration - replace with real authentication
            const newUser: User = {
                id: Date.now().toString(),
                name: userData.name || "",
                email: userData.email || "",
                nativeLanguage: userData.nativeLanguage || "en",
                targetLanguages: userData.targetLanguages || [],
                level: userData.level || "beginner",
                streak: 0,
                totalXP: 0,
                avatar: userData.avatar || "",
            };

            setAuthState({
                user: newUser,
                isLoading: false,
                isAuthenticated: true,
            });
        } catch (error) {
            setAuthState({
                user: null,
                isLoading: false,
                isAuthenticated: false,
            });
            throw error;
        }
    };

    return {
        ...authState,
        login,
        logout,
        register,
    };
};
