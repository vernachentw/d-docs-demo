import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/rtls/app/docs',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vernachentw', // Usually your GitHub org/user name.
  projectName: 'd-docs-demo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-hant',
    locales: ['zh-hant', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        path: 'en',
      },
      'zh-hant': {
        label: '繁體中文',
        direction: 'ltr',
        htmlLang: 'zh-hant',
        path: 'zh-hant',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // id: 'guides', // 加了這個 i18n 會錯誤
          routeBasePath: '/',
          // routeBasePath: '/', // 沒有設home page, 所以要設這個視同/docs 為 /
          // path: 'docs/guides',  // 加了這個 i18n 會錯誤
          // path: './docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',

        // href: '/category/tutorial---basics',
      },
      items: [
        // {
        //   label: 'Guides',
        //   to: '/',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Guide',
        // },
        // {
        //   to: 'docs/', // 默認頁面
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          /**
           * Legacy docs was using .html ext,
           * this will redirect/trim .html tentative to the new correct path
           */
          toExtensions: ['html'],

          // redirects: [
          //   // /docs/oldDoc -> /docs/newDoc
          //   {
          //     to: '/category/tutorial---basics',
          //     from: '/',
          //   },
          // ],
        },
      ],
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    onBrokenLinks: 'ignore',
  } satisfies Preset.ThemeConfig,
};

export default config;
