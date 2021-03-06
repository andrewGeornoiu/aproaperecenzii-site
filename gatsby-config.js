module.exports = {
  siteMetadata: {
    title: `AproapeRecenzii`,
    name: `aproaperecenzii`,
    siteUrl: `https://aproaperecenzii.com/`,
    description: `Un site de recenzii pentru filme si seriale, noi sau vechi. Un colt
    obscur de psudocritica sincera. In viitor probabil voi aborda si alte teme precum:
    muzica, arta, tehnologie, tutorials etc.`,
    hero: {
      heading: `
      aproaperecenzii // your dirty reviews stash`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/andrewGeornoiu`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/andrei_geornoiu/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/andrei-geornoiu-a35a05108/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/GeornoiuAndrei`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
        local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {

      },
    },
  ],
};
