export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
}

export interface TestimonialList {
    id: string;
    testimonials: Testimonial[];
}

export const testimonialLists: Record<string, TestimonialList> = {
    main: {
        id: 'main',
        testimonials: [
            {
                quote: "Cozalt's strategic insights helped us navigate a complex acquisition in the defense sector. Their due diligence was thorough and their recommendations were spot-on.",
                name: "Sarah Mitchell",
                title: "Managing Partner",
                company: "Apex Ventures"
            },
            {
                quote: "Working with Cozalt on our international expansion was a game-changer. Their expertise in European and Middle Eastern markets saved us months of trial and error.",
                name: "James Rodriguez",
                title: "CEO",
                company: "DefenseTech Solutions"
            },
            {
                quote: "As a small defense contractor, we couldn't afford a full-time BD team. Cozalt filled that gap perfectly, helping us win contracts we never thought possible.",
                name: "Michael Chen",
                title: "Founder",
                company: "Tactical Systems Inc."
            }
        ]
    }
};
