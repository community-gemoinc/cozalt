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
                quote: "Cozalt helped us in due diligence of four of our investments in the defense space.",
                name: "Nihal Choubey",
                title: "Expert Insights",
                company: "VC Investor"
            },
            {
                quote: "Cozalt and its consultants were extremely helpful during our due diligence phase as VC investors.",
                name: "Sakshi Malpani",
                title: "Top Notch Service",
                company: "VC Investor"
            },
            {
                quote: "Ajay and his team have helped us expand our business in India and Europe. For the same quality of service we would have had to pay much more had we gone with any other consulting firm. Totally recommended!",
                name: "Sreenath Mallikarjunan",
                title: "Business Expansion",
                company: "International Client"
            }
        ]
    }
};
