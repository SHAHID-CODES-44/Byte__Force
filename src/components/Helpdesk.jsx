import React from "react";

const Helpdesk = () => {
    const faqs = [
        {
            question: "Why this all about?",
            answer: "This Helpdesk section is dedicated to answering common questions related to paper cups and their environmental impact. Paper cups, though convenient, are harmful to the environment because they contain a plastic lining that makes them difficult to recycle. This leads to increased waste in landfills, causing long-term damage to the ecosystem. By choosing sustainable alternatives, we can help reduce this environmental footprint.",
        },
        {
            question: "How can I track my Progress?",
            answer: "You can track your order by logging into your account and visiting the 'Track Order' section.",
        },
        {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of purchase. Ensure the product is in its original condition.",
        },
        {
            question: "How do I contact support?",
            answer: "You can reach out to us via email at support@example.com or call us at +1-234-567-890.",
        },
        {
            question: "Are there any subscription plans?",
            answer: "NO, it's freeee..",
        },
        {
            question: "Can I update my personal information?",
            answer: "Yes, you can update your details in the 'Account Settings' section of your profile.",
        },
    ];

    return (
        <div className="helpdesk-container">
            <h1 className="helpdesk-title">Helpdesk</h1>
            <p className="helpdesk-intro">Find answers to common questions or reach out for support.</p>
            <div className="faq-section">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-card">
                        <h3 className="faq-question">Q: {faq.question}</h3>
                        <p className="faq-answer">A: {faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Helpdesk;
