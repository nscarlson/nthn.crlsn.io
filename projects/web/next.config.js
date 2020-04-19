/**
 * next.js environment configuration
 *
 * https://zeit.co/blog/next5-1#environment-configuration
 */

require('dotenv').config()

module.exports = {
    // Will only be available on the server side
    publicRuntimeConfig: {
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    },
    // Will be available on both server and client
    serverRuntimeConfig: {},
}
