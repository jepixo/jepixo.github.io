export interface CaseStudy {
    title: string;
    client: string;
    summary: string;
    tags: string[];
    url?: string;
    isPlaceholder?: boolean;
}

export const caseStudies: CaseStudy[] = [
    {
        title: 'A full institutional web presence',
        client: 'Christ College, Pune',
        summary:
            'Programs, admissions, governance, and campus life — built and shipped as a live, working site.',
        tags: ['Web Development', 'Institutional'],
        url: '/sites/ccp/',
    },
    {
        title: 'Case study coming soon',
        client: 'Client name TBA',
        summary: 'Brand identity and design work — details to follow.',
        tags: ['Branding'],
        isPlaceholder: true,
    },
    {
        title: 'Case study coming soon',
        client: 'Client name TBA',
        summary: 'Web platform and consulting engagement — details to follow.',
        tags: ['Web & IT'],
        isPlaceholder: true,
    },
];
