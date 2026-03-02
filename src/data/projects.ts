export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    isPrivate?: boolean;
}

export const projects: Project[] = [
    {
        title: 'Street You There',
        description: 'Street You There is a web application that takes a Google Street View URL, fetches panoramic image tiles, stitches them into a high-resolution 360° image, and allows the user to download it.',
        technologies: ['TypeScript', 'Canvas', 'Google Maps API'],
        githubUrl: 'https://github.com/jepixo/streetyouthere'
    },
    {
        title: 'ULPA',
        description: 'A web guide designed to help postgraduate students at the University of Limerick find the best on-campus and off-campus accommodation.',
        technologies: ['TypeScript', 'React', 'Node.js'],
        githubUrl: 'https://github.com/jepixo/ulpa'
    },
    {
        title: 'faithinframes.studio',
        description: 'A high end cinematic wedding photography and videography landing page featuring advanced animations, elegant typography, and a soulful visual narrative.',
        technologies: ['TypeScript', 'React', 'Framer Motion'],
        githubUrl: 'https://github.com/jepixo/faithinframes.studio'
    },
    {
        title: 'wagerWalaIshq',
        description: 'A probability based math game. Made for the intercollege event Technotsav.',
        technologies: ['JavaScript', 'Game Dev'],
        githubUrl: 'https://github.com/jepixo/wagerWalaIshq'
    },
    {
        title: 'mofa',
        description: 'Neutral-identity face reconstruction scaffold that accepts 1 - 3 images and outputs a neutralized 3D head mesh, UV texture, and export artifacts.',
        technologies: ['Python', 'Computer Vision', 'PyTorch'],
        githubUrl: 'https://github.com/jepixo/mofa'
    },
    {
        title: 'blahgenda',
        description: 'Private agenda application.',
        technologies: ['TypeScript', 'React'],
        isPrivate: true
    },
    {
        title: 'gestace',
        description: 'Private Python project.',
        technologies: ['Python'],
        isPrivate: true
    },
    {
        title: 'billblaze',
        description: 'Document editor that thinks like a spreadsheet and looks like a designer.',
        technologies: ['Dart', 'Flutter'],
        githubUrl: 'https://github.com/jepixo/billblaze'
    },
    {
        title: 'Dripboard',
        description: 'Like mood boards but for drip.',
        technologies: ['TypeScript', 'React'],
        githubUrl: 'https://github.com/jepixo/dripboard'
    },
    {
        title: 'Huedini',
        description: 'Generate smooth, random gradients and palettes - simple, minimal, endlessly colorful.',
        technologies: ['TypeScript', 'React', 'Colors'],
        githubUrl: 'https://github.com/jepixo/huedini'
    },
    {
        title: 'copilot_agent',
        description: 'Building a coding copilot using raw python and the Gemini LLM.',
        technologies: ['Python', 'LLM', 'AI'],
        githubUrl: 'https://github.com/jepixo/copilot_agent'
    }
];
