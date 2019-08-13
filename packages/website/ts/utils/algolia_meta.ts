// @TODO: Fix all descriptions!
export const meta: { [key: string]: any } = {
    // Api explorer
    'api-explorer': {
        title: '0x API Explorer',
        path: 'api-explorer/index.mdx',
    },
    // Core concepts
    'core-concepts': {
        title: '0x Core Concepts',
        subtitle: "Learn all the core concepts you'll need to build effectively on 0x",
        path: 'core-concepts/index.mdx',
    },
    // Guides
    'build-a-relayer': {
        title: 'Build a relayer',
        description: 'A relayer is any party or entity which hosts an off-chain orderbook.',
        tags: ['Relayer', 'Trader', 'Protocol Developer'],
        topics: ['Coordinator Model', 'Mesh'],
        difficulty: 'Advanced',
        path: 'guides/build-a-relayer.mdx',
    },

    'develop-on-ethereum': {
        title: 'Develop on Ethereum',
        description: 'Welcome to the exciting world of building applications on the Ethereum Blockchain',
        tags: ['Relayer', 'Trader'],
        topics: ['Mesh', 'Protocol Developer'],
        difficulty: 'Beginner',
    },

    'page-template': {
        title: 'Page template',
        description: 'A relayer is any party or entity which hosts an off-chain orderbook.',
        tags: ['Relayer', 'Trader', 'Protocol Developer'],
        topics: ['Coordinator Model', 'Mesh'],
        difficulty: 'Advanced',
    },

    'use-networked-liquidity': {
        title: 'Use networked liquidity',
        description:
            'In this tutorial, we will show you how you can use the @0x/connect package in conjunction with 0x.js in order to',
        tags: ['Protocol Developer'],
        topics: ['Mesh'],
        difficulty: 'Intermediate',
    },
    // Tools
    'asset-buyer': {
        title: 'Asset buyer',
        description: '',
        topics: ['Mesh'],
        difficulty: 'Intermediate',
        isCommunity: true,
        isFeatured: true,
        tags: ['Relayer'],
        type: 'Docker images',

        path: 'tools/@0x/asset-buyer/v6.1.11/reference.mdx',
    },
    'ethereum-types': {
        title: 'Ethereum types',
        description: '',
        topics: ['Mesh'],
        difficulty: 'Intermediate',
        isCommunity: true,
        isFeatured: true,
        tags: ['Protocol developer'],
        type: 'Command-line tools',

        path: 'tools/ethereum-types/v2.1.4/reference.mdx',
    },
};