import { TrendingUp, Search, Handshake, Globe } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof TrendingUp;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Cozalt services
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: TrendingUp,
                title: 'Business Strategy Consulting',
                description: 'We assist small defense-focused businesses in developing growth strategies by analyzing strengths, weaknesses, opportunities, and threats to create customized business plans.'
            },
            {
                icon: Search,
                title: 'Due Diligence',
                description: 'We support venture capital and debt firms in evaluating defense startups and investment targets using proprietary research methods and industry expertise.'
            },
            {
                icon: Handshake,
                title: 'Business Development',
                description: 'We offer affordable BD services for small defense firms lacking resources for full-time professionals, providing process optimization and network access.'
            },
            {
                icon: Globe,
                title: 'International Expansion',
                description: 'We provide expertise for global operations setup, leveraging experience across Europe, Middle East, and U.S. markets.'
            }
        ]
    }
};
