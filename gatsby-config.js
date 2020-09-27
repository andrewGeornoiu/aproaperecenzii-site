module.exports = {
  siteMetadata: {
    title: `AproapeRecenzii`,
    name: `aproaperecenzii`,
    siteUrl: `https://aproaperecenzii.com/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `
      aproaperecenzii // your dirty reviews stash`,
      maxWidth: 652,
    },
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
          contentful: true,
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
