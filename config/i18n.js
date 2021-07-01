// Only one item MUST have the "default: true" key

module.exports = {
  zh: {
    default: true,
    path: `zh`,
    locale: `zh-CN`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `zh`,
    ogLanguage: `zh-CN`,
    defaultTitle: `RPA 官方网站`,
    defaultDescription: `RPA 官方网站 i18n示例`,
  },
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
}
