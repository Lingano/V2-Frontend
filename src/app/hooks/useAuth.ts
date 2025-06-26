import { useState, useEffect } from "react";
import type { User } from "../types";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const useAuth = (): AuthState & {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (userData: RegisterData) => Promise<void>;
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
                // Check localStorage for auth token
                const token = localStorage.getItem("authToken");
                const userData = localStorage.getItem("userData");
                if (token && userData) {
                    // Validate token with backend (optional but recommended)
                    try {
                        const user: User = JSON.parse(userData);

                        // You could add a token validation endpoint here
                        // const validationResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/validate`, {
                        //     headers: { 'Authorization': `Bearer ${token}` }
                        // });

                        // if (!validationResponse.ok) {
                        //     throw new Error('Token invalid');
                        // }

                        setAuthState({
                            user,
                            isLoading: false,
                            isAuthenticated: true,
                        });
                    } catch (error) {
                        // Token might be invalid, clear it
                        localStorage.removeItem("authToken");
                        localStorage.removeItem("userData");
                        setAuthState({
                            user: null,
                            isLoading: false,
                            isAuthenticated: false,
                        });
                    }
                } else {
                    setAuthState({
                        user: null,
                        isLoading: false,
                        isAuthenticated: false,
                    });
                }
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
            // Call the actual backend API
            const response = await fetch(
                `${
                    import.meta.env.VITE_API_BASE_URL ||
                    "https://api2.lingano.live"
                }/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login failed");
            }

            // Try to fetch full user profile, fallback to basic info if not available
            let user: User;
            try {
                user = await fetchUserProfile(data.token, data.userId);
            } catch (profileError) {
                // Fallback to basic user info from login response
                user = {
                    id: data.userId,
                    name: data.name,
                    email: email,
                    nativeLanguage: "en",
                    targetLanguages: ["es"],
                    level: "intermediate",
                    streak: 0,
                    totalXP: 0,
                    avatar: "",
                };
            }

            // Store auth data in localStorage
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("userData", JSON.stringify(user));

            setAuthState({
                user,
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
        // Clear auth data from localStorage
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");

        setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
        });
    };
    const register = async (userData: RegisterData): Promise<void> => {
        setAuthState((prev) => ({ ...prev, isLoading: true }));

        try {
            // Call the actual backend API
            const response = await fetch(
                `${
                    import.meta.env.VITE_API_BASE_URL ||
                    "https://api2.lingano.live"
                }/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: userData.name,
                        email: userData.email,
                        password: userData.password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Registration failed");
            }

            // After successful registration, you might want to automatically log in
            // or just show a success message and redirect to login
            setAuthState({
                user: null,
                isLoading: false,
                isAuthenticated: false,
            });

            // Optionally auto-login after registration
            // await login(userData.email, userData.password);
        } catch (error) {
            setAuthState({
                user: null,
                isLoading: false,
                isAuthenticated: false,
            });
            throw error;
        }
    };

    const fetchUserProfile = async (
        token: string,
        userId: string
    ): Promise<User> => {
        const response = await fetch(
            `${
                import.meta.env.VITE_API_BASE_URL || "https://api2.lingano.live"
            }/api/users/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user profile");
        }

        const userData = await response.json();

        // Map backend user data to frontend User interface
        return {
            id: userData.id || userData._id,
            name: userData.name,
            email: userData.email,
            nativeLanguage: userData.profile?.nativeLanguage || "en",
            targetLanguages: userData.profile?.targetLanguages || ["es"],
            level: userData.profile?.level || "beginner",
            streak: userData.profile?.streak || 0,
            totalXP: userData.profile?.totalXP || 0,
            avatar: userData.profile?.avatar || "",
        };
    };

    return {
        ...authState,
        login,
        logout,
        register,
    };
};
