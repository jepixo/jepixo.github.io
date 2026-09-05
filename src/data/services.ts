export interface Service {
    title: string;
    tagline: string;
    description: string;
    items: string[];
}

export const services: Service[] = [
    {
        title: 'Web & IT',
        tagline: 'Built to work, not just to launch',
        description:
            'Websites, web apps, and technical consulting — from landing pages to full platforms that hold up under real traffic.',
        items: ['Web development', 'Web apps & platforms', 'Technical consulting'],
    },
    {
        title: 'Branding & Design',
        tagline: 'Look as sharp as you run',
        description:
            'Logos, identity systems, and graphic design that give a business a face worth remembering.',
        items: ['Logo & identity', 'Graphic design', 'Brand systems'],
    },
    {
        title: 'Merchandise',
        tagline: 'One team, one look',
        description:
            'Uniforms, hoodies, and branded apparel for teams and events that want to show up as one.',
        items: ['Uniforms', 'Hoodies & apparel', 'Branded merch'],
    },
];
