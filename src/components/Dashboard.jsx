import React from "react";
import "./Style.css";

const Dashboard = () => {
    return (
        <>
            <div>
                {/* Navbar */}
                <nav id="navbar5">
                    <h1 id="text6">MyDashboard</h1>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="#analytics">Analytics</a>
                        <a href="#reports">Reports</a>
                        <a href="/Task">Tasks</a>
                        <a href="#settings">Settings</a>
                    </div>
                </nav>

                {/* Dashboard Sections */}
                <div className="dash-sections">
                    <section id="home" className="section">
                        <h2>Welcome to MyDashboard</h2>
                        <p>Track, analyze, and optimize your productivity in one place.</p>
                        <div className="widget">
                            <h3>Today's Highlights</h3>
                            <ul>
                                <li>5 Tasks Completed</li>
                                <li>2 Meetings Scheduled</li>
                                <li>85% Productivity Rate</li>
                            </ul>
                        </div>
                    </section>

                    <section id="analytics" className="section">
                        <h2>Analytics</h2>
                        <p>Gain insights into your performance metrics and project analytics.</p>
                        <div className="widget analytics-widget">
                            <h3>Weekly Overview</h3>
                            <p>Workload: Moderate | Efficiency: High | Time Spent: 40 hrs</p>
                        </div>
                    </section>

                    <section id="reports" className="section">
                        <h2>Reports</h2>
                        <p>Download detailed reports to analyze your progress and achievements.</p>
                        <button className="btn-download">Download Report</button>
                    </section>

                    <section id="tasks" className="section">
                        <h2>Tasks</h2>
                        <p>Manage your daily tasks effectively with real-time updates.</p>
                        <ul className="task-list">
                            <li>Complete Dashboard UI Design</li>
                            <li>Submit Weekly Report</li>
                            <li>Prepare Presentation for Project</li>
                        </ul>
                    </section>

                    <section id="settings" className="section">
                        <h2>Settings</h2>
                        <p>Customize your experience and adjust preferences as needed.</p>
                        <div className="settings-options">
                            <p>Theme: <span className="theme-switch">Light/Dark</span></p>
                            <p>Notifications: Enabled</p>
                            <p>Privacy Settings: Secured</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer id="footer4">
                <p>&copy; 2025 MyDashboard. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="#terms">Terms of Service</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </footer>
        </>
    );
};

export default Dashboard;
