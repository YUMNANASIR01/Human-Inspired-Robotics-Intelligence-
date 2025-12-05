import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Human-Inspired Robotics & Intelligence Guide',
  tagline: 'Learning Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  // ✅ Vercel settings
  url: 'https://human-inspired-robotics-intelligence.vercel.app',
  baseUrl: '/',
  
  organizationName: 'YUMNANASIR01',
  projectName: 'Human-Inspired Robotics & Intelligence Guide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      ur: {
        label: 'اردو',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // ✅ Serve docs at root URL
          // Remove editUrl or update it
        },
        blog: false, // ✅ Disable blog if not using
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ph-ai-logo.png',

      navbar: {
        title: 'Human-Inspired Robotics & Intelligence Guide',
        logo: {
          alt: 'Human-Inspired Robotics Logo',
          src: 'img/ph-ai-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/YUMNANASIR01/Human-Inspired-Robotics-Intelligence',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Profiles',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/',
              },
              {
                label: 'Twitter (X)',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/YUMNANASIR01',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Human-Inspired Robotics & Intelligence Guide — Built with ❤️ by Yumna Nasir.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;