import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            {/* Header section */}
            <div className="about-header">
                <h1 className="about-title">About Lingano</h1>
                <p className="about-subtitle">
                    Lingano is a revolutionary language learning platform
                    designed to help you master new languages quickly,
                    effectively, and with enjoyment. Our innovative approach
                    combines immersive learning experiences with cutting-edge
                    technology.
                </p>
            </div>

            {/* Our Story Section */}
            <div className="about-section">
                <h2 className="section-title">Our Story</h2>
                <p>
                    Founded in 2023, Lingano began with a simple mission: to
                    transform how people learn languages. Our founders
                    experienced firsthand the challenges of traditional language
                    learning methods and wanted to create something better—a
                    platform that makes language acquisition natural,
                    contextual, and personalized.
                </p>
                <p>
                    What started as a small project has grown into a thriving
                    community of language learners from around the world. Today,
                    Lingano offers courses in over 25 languages, serving
                    students, professionals, travelers, and language enthusiasts
                    alike.
                </p>
            </div>

            {/* Our Approach Section with Cards */}
            <div className="about-section">
                <h2 className="section-title">Our Approach</h2>
                <div className="about-grid">
                    <div className="about-card">
                        <div
                            className="about-card-image"
                            style={{
                                backgroundColor: "#e6f7ff",
                                textAlign: "center",
                                lineHeight: "180px",
                                fontSize: "3rem",
                            }}
                        >
                            🎯
                        </div>
                        <div className="about-card-content">
                            <h3 className="about-card-title">
                                Contextual Learning
                            </h3>
                            <p className="about-card-text">
                                We believe in learning languages through
                                real-world content. Our platform uses authentic
                                materials like articles, videos, and
                                conversations to help you learn language as it's
                                actually used.
                            </p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div
                            className="about-card-image"
                            style={{
                                backgroundColor: "#fff6e6",
                                textAlign: "center",
                                lineHeight: "180px",
                                fontSize: "3rem",
                            }}
                        >
                            🧠
                        </div>
                        <div className="about-card-content">
                            <h3 className="about-card-title">
                                Spaced Repetition
                            </h3>
                            <p className="about-card-text">
                                Our intelligent system uses spaced repetition
                                algorithms to optimize your memory retention,
                                presenting words and phrases at the perfect
                                intervals for maximum learning efficiency.
                            </p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div
                            className="about-card-image"
                            style={{
                                backgroundColor: "#e6fffa",
                                textAlign: "center",
                                lineHeight: "180px",
                                fontSize: "3rem",
                            }}
                        >
                            🤖
                        </div>
                        <div className="about-card-content">
                            <h3 className="about-card-title">
                                AI-Powered Personalization
                            </h3>
                            <p className="about-card-text">
                                Lingano adapts to your learning style,
                                interests, and progress. Our AI technology
                                creates a personalized learning path that
                                evolves as you advance in your language journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="about-section">
                <h2 className="section-title">Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div
                            className="team-photo"
                            style={{
                                backgroundColor: "#f0f4f8",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ fontSize: "3rem" }}>👩‍💼</span>
                        </div>
                        <h3 className="team-name">Sophia Chen</h3>
                        <p className="team-role">Founder & CEO</p>
                        <p className="team-bio">
                            Linguist with a passion for educational technology.
                            Previously led product at a leading EdTech company.
                        </p>
                    </div>

                    <div className="team-member">
                        <div
                            className="team-photo"
                            style={{
                                backgroundColor: "#f0f4f8",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ fontSize: "3rem" }}>👨‍💻</span>
                        </div>
                        <h3 className="team-name">Miguel Rodriguez</h3>
                        <p className="team-role">CTO</p>
                        <p className="team-bio">
                            AI researcher and polyglot who's fluent in 5
                            languages. Leads our technology and innovation
                            efforts.
                        </p>
                    </div>

                    <div className="team-member">
                        <div
                            className="team-photo"
                            style={{
                                backgroundColor: "#f0f4f8",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ fontSize: "3rem" }}>👨‍🎓</span>
                        </div>
                        <h3 className="team-name">Dr. James Wilson</h3>
                        <p className="team-role">Head of Pedagogy</p>
                        <p className="team-bio">
                            PhD in Applied Linguistics with 15+ years of
                            experience in language acquisition research.
                        </p>
                    </div>

                    <div className="team-member">
                        <div
                            className="team-photo"
                            style={{
                                backgroundColor: "#f0f4f8",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ fontSize: "3rem" }}>👩‍🎨</span>
                        </div>
                        <h3 className="team-name">Aisha Patel</h3>
                        <p className="team-role">UX Director</p>
                        <p className="team-bio">
                            Creates engaging learning experiences that make
                            language acquisition intuitive and enjoyable.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision and Mission */}
            <div className="about-section">
                <h2 className="section-title">Vision & Values</h2>
                <div className="vision-container">
                    <div className="vision-item">
                        <span className="vision-icon">🌍</span>
                        <h3 className="vision-title">Our Vision</h3>
                        <p className="vision-text">
                            We envision a world where language barriers no
                            longer exist—where people can connect, collaborate,
                            and understand each other regardless of their native
                            tongues. Through accessible, effective language
                            learning, we aim to foster global communication and
                            cultural appreciation.
                        </p>
                    </div>

                    <div className="vision-item">
                        <span className="vision-icon">💡</span>
                        <h3 className="vision-title">Our Values</h3>
                        <p className="vision-text">
                            <strong>Accessibility:</strong> We believe language
                            learning should be available to everyone.
                            <br />
                            <strong>Innovation:</strong> We continuously improve
                            our methods based on the latest research.
                            <br />
                            <strong>Community:</strong> We foster connections
                            between learners worldwide.
                            <br />
                            <strong>Cultural Respect:</strong> We promote
                            understanding and appreciation of diverse cultures.
                            <br />
                            <strong>Effectiveness:</strong> We are committed to
                            providing learning methods that actually work.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2 className="cta-title">
                    Ready to Start Your Language Journey?
                </h2>
                <p className="cta-text">
                    Join thousands of learners who've already discovered a
                    better way to master new languages. Start for free and
                    experience the Lingano difference today.
                </p>
                <button className="cta-btn">Get Started Now</button>
            </div>
        </div>
    );
};

export default About;
