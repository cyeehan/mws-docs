module.exports = {
  /**
   * Documentation section
   */
  // docs: [
  //   {
  //     type: "doc",
  //     id: "intro",
  //   },
  //   /**
  //    * Installation guides
  //    */
  //   {
  //     type: "category",
  //     label: "Installation",
  //     items: ["installation/install-microsoft-office-365"],
  //     collapsed: false,
  //   },
  //   /**
  //    * Excitement Days section
  //    */
  //   {
  //     type: "category",
  //     label: "Training & Recruitment",
  //     items: ["training-and-recruitment-sessions/2021-01-23-24-27-session"],
  //     collapsed: false,
  //   },
  //   /**
  //    * Excitement Days section
  //    */
  //   {
  //     type: "category",
  //     label: "Excitement Days",
  //     items: [],
  //   },
  //   /**
  //    * FAQ section
  //    */
  //   {
  //     type: "category",
  //     label: "FAQ",
  //     collapsed: false,
  //     items: ["faq/faq1"],
  //   },
  // ],

  /**
   * FYI: * It is an example of multiple sidebars
   *
   * Tips & Tricks section
   */
  tipsandtricks: [
    /**
     * O365 apps include:
     * Teams, PowerPoint, Word,
     * Excel, Outlook, OneNote,
     * OneDrive, Sway, Power BI
     */
    {
      type: "doc",
      id: "tips-and-tricks/introduction",
    },
    {
			type: "doc",
			id: "tips-and-tricks/installation/install-microsoft-office-365",
		},
    // {
    //   type: "category",
    //   label: "Teams",
    //   items: ["tips-and-tricks/teams/teams-1"],
    // },
    // {
    //   type: "category",
    //   label: "PowerPoint",
    //   items: ["tips-and-tricks/powerpoint/powerpoint-1"],
    // },
    {
      type: "category",
      label: "Word",
      items: [
        "tips-and-tricks/word/2021-03-26-how-to-change-default-font/index",
        "tips-and-tricks/word/2021-03-26-add-citations/index",
        "tips-and-tricks/word/2021-03-31-write-text-anywhere-easily/index",
        "tips-and-tricks/word/2021-03-27-single-page-orientation/index",
        "tips-and-tricks/word/2021-03-29-how-to-make-your-resume-shines/index",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Excel",
      items: [
        "tips-and-tricks/excel/2021-03-01-remove-n-characters-from-field/remove-n-characters-from-field",
        "tips-and-tricks/excel/2021-04-21-npv-function/npv-function",
        "tips-and-tricks/excel/2021-04-21-irr-function/irr-function",
        "tips-and-tricks/excel/2021-04-18-create-pivot-charts/create-pivot-charts",
        "tips-and-tricks/excel/2021-04-27-create-pivot-tables/create-pivot-tables",
        "tips-and-tricks/excel/2021-04-19-how-to-use-pmt-and-subtotal/how-to-use-pmt-and-subtotal",
        "tips-and-tricks/excel/2021-04-19-vertical-lookup/vertical-lookup",
        "tips-and-tricks/excel/2021-04-19-xlookup-function/xlookup-function",
        "tips-and-tricks/excel/2021-06-29-pv-function/pv-function",
      ],
      collapsed: false,
    },
    // {
    //   type: "category",
    //   label: "Outlook",
    //   items: ["tips-and-tricks/outlook/outlook-1"],
    // },
    // {
    //   type: "category",
    //   label: "OneNote",
    //   items: ["tips-and-tricks/onenote/onenote-1"],
    // },
    // {
    //   type: "category",
    //   label: "OneDrive",
    //   items: ["tips-and-tricks/onedrive/onedrive-1"],
    // },
    // {
    //   type: "category",
    //   label: "Sway",
    //   items: ["tips-and-tricks/sway/sway-1"],
    // },
    // {
    //   type: "category",
    //   label: "Power BI",
    //   items: ["tips-and-tricks/power-bi/power-bi-1"],
    // },
    {
      type: "category",
      label: "FAQ",
      collapsed: false,
      items: ["faq/faq1"],
    },
    // End
  ],

  /**
   * Newsletters
   */
  newsletters: [
    {
      type: "doc",
      id: "newsletters/august-2021",
    },
    {
      type: "doc",
      id: "newsletters/june-and-july-2021",
    },
    {
      type: "doc",
      id: "newsletters/may-to-june-2021",
    },
    {
      type: "doc",
      id: "newsletters/april-to-may-2021",
    },
    {
      type: "doc",
      id: "newsletters/march-to-april-2021",
    },
    {
      type: "doc",
      id: "newsletters/january-to-february-2021",
    },
  ],
};
