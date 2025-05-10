import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("Loading...");

    // Use environment variables for API URL
    const API_URL =
        import.meta.env.VITE_API_URL ||
        "https://linganodjango-8d1cd6dceb8a.herokuapp.com";

    useEffect(() => {
        fetch(`${API_URL}/api/current-time/`)
            .then((response) => response.json())
            .then((data) => setMessage(data.current_time))
            .catch((error) => {
                console.error("Error fetching data:", error);
                setMessage("Error loading message");
            });
    }, []);

    return (
        <div className="App">
            <h1>Message from API: {message}</h1>
        </div>
    );
}

export default App;
