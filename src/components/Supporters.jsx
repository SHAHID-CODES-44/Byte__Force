import React from "react";

const Supportes = () => {
    return (
        <div className="supportes-container">
            <h1 className="supportes-title">Support Center</h1>
            <p className="supportes-intro">
                Welcome to our Support Center. Here, you can find helpful resources and tutorials to assist you.
                If you need further assistance, please reach out to our support team.
            </p>

            <div className="support-section">
                <div className="support-card">
                    <h2 className="support-card-title">Frequently Asked Questions</h2>
                    <p className="support-card-text">
                        Explore our FAQ section for quick answers to common inquiries and issues.
                    </p>
                    <a href="/Helpdesk" className="support-link">Go to FAQs</a>
                </div>

                <div className="support-card">
                    <h2 className="support-card-title">Tutorial Videos</h2>
                    <p className="support-card-text">
                        Watch our tutorial videos to learn more about how to use our services effectively.
                    </p>
                    <a href="#tutorials" className="support-link">View Tutorials</a>
                </div>

                <div className="support-card">
                    <h2 className="support-card-title">YouTube Support Video</h2>
                    <p className="support-card-text">
                        Check out our YouTube video for detailed guidance on troubleshooting and support.
                    </p>
                    <a href="https://youtu.be/QeB4uV4QiHE" className="support-link" target="_blank" rel="noopener noreferrer">
                        Watch Support Video
                    </a>
                </div>
            </div>

            <footer className="support-footer">
                <p>&copy; 2025 Support Center. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Supportes;
