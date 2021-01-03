module.exports = {
  title: "Modern Workplace Squad",
  tagline: "Learn more about us",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cyeehan", // Usually your GitHub org/user name.
  projectName: "mws-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Modern Workplace Squad",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/cyeehan/mws-docs",
          label: "GitHub",
          position: "right",
        },
      ], 
    },
    plugins: ["@docusaurus/plugin-google-analytics"],
    themeConfig: {
      googleAnalytics: {
        trackingID: process.env.REACT_APP_TRACKING_ID,
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
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
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/cyeehan/mws-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} • Microsoft Modern Workplace Squad • Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
