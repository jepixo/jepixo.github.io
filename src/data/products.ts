export interface Product {
    name: string;
    tagline: string;
    description: string;
    status: 'live' | 'in-development';
    statusLabel: string;
    primaryCta?: { label: string; url: string };
    secondaryCta?: { label: string; url: string };
}

// Add new product cards here — the grid picks them up automatically.
export const products: Product[] = [
    {
        name: 'Billblaze',
        tagline: 'Billing that gets out of your way',
        description:
            'Invoice, track, and get paid without the overhead. Free to start, upgrade when you outgrow it.',
        status: 'live',
        statusLabel: 'Live',
        primaryCta: { label: 'Try Billblaze', url: 'https://billblaze.web.app' },
        secondaryCta: { label: 'Get it on Gumroad', url: 'https://jepixo.gumroad.com/l/billblaze' },
    },
    {
        name: 'Gourmate',
        tagline: 'A restaurant operating system',
        description:
            'POS, orders, and floor management built for how kitchens actually run — not how software imagines they do.',
        status: 'in-development',
        statusLabel: 'In Development',
    },
];
