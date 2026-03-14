import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/logoipsum-333.svg';
import logo2 from '../assets/images/logos/logoipsum-335.svg';
import logo3 from '../assets/images/logos/logoipsum-344.svg';
import logo4 from '../assets/images/logos/logoipsum-347.svg';
import logo5 from '../assets/images/logos/logoipsum-352.svg';

export interface Logo {
    src: ImageMetadata;
    alt: string; // The partner company's name
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo1,
                alt: 'Celestial Lithium',
            },
            {
                src: logo2,
                alt: 'Unmanned Dynamics',
            },
            {
                src: logo3,
                alt: 'Shah Business Ventures',
            },
        ],
    },
};
