require('dotenv').config({
    path: `.env`,
});

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.API_URL || 'http://localhost:1337',
                contentTypes: ['video-submission'],
                queryLimit: 1000,
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout`),
            },
        },
    ],
};
