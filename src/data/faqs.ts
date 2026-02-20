export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "What industries does Cozalt serve?",
                answer: "Cozalt specializes in the defense and critical minerals sectors. We work with defense contractors, critical minerals companies, venture capital firms evaluating defense investments, and businesses looking to expand into defense-adjacent markets."
            },
            {
                question: "How does the consultation process work?",
                answer: "We begin with a discovery call to understand your specific needs and challenges. From there, we develop a tailored engagement plan that may include market analysis, strategic planning sessions, due diligence research, or ongoing advisory support depending on your requirements."
            },
            {
                question: "What is the typical engagement timeline?",
                answer: "Engagement timelines vary based on scope. Due diligence projects typically take 2-4 weeks, while strategic consulting engagements may span several months. We work with you to establish clear milestones and deliverables upfront."
            },
            {
                question: "Do you work with international clients?",
                answer: "Yes, we have extensive experience working across Europe, the Middle East, and the United States. Our international expansion services are specifically designed to help companies navigate cross-border operations and regulatory requirements."
            },
            {
                question: "What sets Cozalt apart from other consulting firms?",
                answer: "Our deep specialization in defense and critical minerals, combined with proprietary research methods and an extensive industry network, allows us to provide insights that generalist consultants cannot. We offer affordable, targeted services that deliver measurable results."
            }
        ]
    }
};
