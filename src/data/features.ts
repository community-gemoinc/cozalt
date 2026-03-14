import { TrendingUp, Search, Handshake, Globe, MapPin, GraduationCap } from 'lucide-astro';
import type { ImageMetadata } from 'astro';
import businessStrategy from '../assets/images/service-business-strategy.jpg';
import dueDiligence from '../assets/images/service-due-diligence.jpg';
import businessDev from '../assets/images/service-exhibition.jpg';
import international from '../assets/images/service-international.jpg';
import india from '../assets/images/service-india.jpg';
import training from '../assets/images/service-training.jpg';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof TrendingUp;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    image?: ImageMetadata | string;
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
                description: 'Our Business Strategy Consulting services help small defense-related businesses develop a roadmap for growth and expansion. We work with you to identify strengths, weaknesses, opportunities, and threats, and create a tailored plan to achieve your business goals.',
                image: businessStrategy
            },
            {
                icon: Search,
                title: 'Due Diligence',
                description: 'We act as trusted advisors to Venture Capital firms and Family Offices conduct thorough due diligence on defense/deep tech startups and companies. Our team comes from the top echelons of the industry and has proprietary research methods to unearth information that will be crucial to your investment.',
                image: dueDiligence
            },
            {
                icon: Handshake,
                title: 'Business Development',
                description: 'We understand that small defense businesses may not have the funds to hire full-time business development or sales professionals. Cozalt® steps in to provide our valuable services in helping your business thrive with cutting-edge BD processes and helping you access our valuable networks.',
                image: businessDev
            },
            {
                icon: Globe,
                title: 'International Expansion',
                description: 'We have experts who have worked and thrived internationally, whether it is Europe, Middle East or the U.S. If you are looking to expand your operations globally, then Cozalt® is your ideal partner. We have already helped our clients expand into different countries.',
                image: international
            },
            {
                icon: MapPin,
                title: 'Business Entry to India',
                description: 'Fancying entering the fastest growing economy in the world? We got your back. Cozalt® experts have assisted multiple foreign companies navigate the complex procedures to expand their business to India. We take care of everything - Legal, Accounting, Payroll and Govt Affairs.',
                image: india
            },
            {
                icon: GraduationCap,
                title: 'Training & Skill Development',
                description: 'Cozalt® experts provide Sales and Business Development training for startups and MSMEs, who might have young and inexperienced sales teams. We also impart specialized training in handling Government Affairs to defense/deep tech companies who have public contracts.',
                image: training
            }
        ]
    }
};
