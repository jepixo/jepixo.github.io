export type SuiteArmStatus = 'live' | 'in-progress' | 'coming-soon';

export interface Service {
    /** The sub-brand name, e.g. "Web", "Forma". */
    name: string;
    /** The plain-language category shown alongside the sub-brand name. */
    category: string;
    tagline: string;
    description: string;
    items: string[];
    status: SuiteArmStatus;
    /** Live subdomain, only set once the sub-brand's site is built. */
    url?: string;
}

export const services: Service[] = [
    {
        name: 'Web',
        category: 'Web & IT',
        tagline: 'Built to work, not just to launch',
        description:
            'Websites, web apps, and technical consulting — from landing pages to full platforms that hold up under real traffic.',
        items: ['Web development', 'Web apps & platforms', 'Technical consulting'],
        status: 'live',
        url: 'https://web.jepixo.in',
    },
    {
        name: 'Forma',
        category: 'Branding & Design',
        tagline: 'Look as sharp as you run',
        description:
            'Logos, identity systems, and graphic design that give a business a face worth remembering.',
        items: ['Logo & identity', 'Graphic design', 'Brand systems'],
        status: 'coming-soon',
    },
    {
        name: 'Motion',
        category: 'Photography, Video & Ads',
        tagline: 'Stories that move',
        description:
            'Photography, video, and marketing ads that make a brand feel alive, not just documented.',
        items: ['Photography', 'Video production', 'Marketing ads & content'],
        status: 'coming-soon',
    },
    {
        name: 'Atelier',
        category: 'Merchandise',
        tagline: 'One team, one look',
        description:
            'Uniforms, hoodies, and branded apparel for teams and events that want to show up as one.',
        items: ['Uniforms', 'Hoodies & apparel', 'Branded merch'],
        status: 'in-progress',
    },
];

/** The umbrella site for the whole services division. */
export const suiteUrl = 'https://suite.jepixo.in';
