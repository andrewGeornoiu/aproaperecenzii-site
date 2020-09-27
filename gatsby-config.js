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
