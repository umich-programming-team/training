const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'UMich Programming Team',
  tagline: 'Think. Code. Solve.',
  url: 'https://umich-programming-team.github.io',
  baseUrl: '/training/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'umich-programming-team', // Usually your GitHub org/user name.
  projectName: 'training', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: 'UMich Programming Team',
      logo: {
        alt: 'My Site Logo',
        src: 'https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png',
      },
      items: [
        {
          to: 'docs/00-introduction/about-icpc',
          activeBasePath: 'docs',
          label: 'Training',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UMich Programming Team. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
  ],
};
