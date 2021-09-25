module.exports = {
  title: "Modern Workplace Squad",
  tagline: "Learn more about us",
  url: "https://modern-workplace-squad.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cyeehan", // Usually your GitHub org/user name.
  projectName: "modern-workplace-squad", // Usually your repo name.
  themeConfig: {
    /**
     * Misc
     */
    image: "img/og_image.png",
    hideableSidebar: true,
    /**
     * Navigation bar
     */
    navbar: {
      title: "Modern Workplace Squad",
      logo: {
        alt: "My Site Logo",
        src: "img/svg/logo.svg",
      },
      items: [
        /**
         * Left side
         */
        // {
        //   /* Special navbar item type will render the link to the doc of the provided `docId`. It will get the class navbar__link--active as long as you browse a doc of the same sidebar. (from Docusaurus) */
        //   type: "doc",
        //   docId: "intro",
        //   activeSidebarClassName: "navbar__link--active",
        //   label: "Docs",
        //   position: "left",
        // },
        {
          to: "/docs/tips-and-tricks/introduction",
          activeBaseRegex: "/tips-and-tricks/",
          docId: "tipsandtricks",
          label: "Tips and Tricks",
          position: "left",
        },
        {
          to: "/blog/",
          activeBasePath: "/blog/",
          label: "Blog",
          position: "left",
        },
        {
          to: "/docs/newsletters/august-2021",
          docId: "newsletters",
          activeBaseRegex: "/newsletters/",
          label: "Newsletters",
          position: "left",
        },
        /**
         * Right side
         */
        {
          to: "/quarter-leaders",
          docId: "leaders",
          label: "Leaders",
          position: "right",
        },
        {
          to: "/squad-members",
          docId: "squad-members",
          label: "Squad",
          position: "right",
        },
        /* End of Markdown files */
        {
          href: "https://github.com/cyeehan/mws-site",
          position: "right",
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    /**
     * Google Analytics
     */
    gtag: {
      trackingID: "G-45057ZJV37",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    /**
     * Footer
     */
    footer: {
      style: "dark",
      links: [
        // Left column
        {
          title: "About Us",
          items: [
            {
              label: "Introduction",
              to: "docs/intro",
            },
            {
              label: "Squad",
              to: "squad-members",
            },
          ],
        },
        // Middle column
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/microsoft_mws/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/microsoft.mws",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/mwsquad/",
            },
          ],
        },
        // Right column
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/cyeehan/modern-workplace-squad",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} • Microsoft Modern Workplace Squad • Built with Docusaurus.`,
    },
  },
  // Presets
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          /**
           * related to custom_edit_url for docs directory
           */
          editUrl: "https://github.com/cyeehan/modern-workplace-squad/tree/master/website",
        },
        blog: {
          showReadingTime: true,
           /**
           * related to custom_edit_url for blog directory
           */
          editUrl: "https://github.com/cyeehan/modern-workplace-squad/tree/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
