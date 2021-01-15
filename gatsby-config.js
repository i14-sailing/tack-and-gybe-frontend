require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["video-submission"],
        queryLimit: 1000,
      },
    },
  ],
}
