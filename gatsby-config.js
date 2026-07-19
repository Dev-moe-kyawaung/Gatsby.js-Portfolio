module.exports = {
  siteMetadata: {
    title: `Moe Kyaw Aung | Portfolio`,
    description: `Senior Full-Stack & Android Developer — Kotlin, React, Firebase, Cloud`,
    author: `@Dev-moekyawaung`,
    siteUrl: `https://dev-moekyawaung.github.io/gatsby-portfolio`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Moe Kyaw Aung Portfolio`,
        short_name: `MKA Portfolio`,
        start_url: `/`,
        background_color: `#0d0d0d`,
        theme_color: `#c9a84c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
