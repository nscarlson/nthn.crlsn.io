// next.config.js
const nextBuildId = require('next-build-id')

module.exports = {
    distDir: 'build',
    generateBuildId: async () => {
        const fromGit = await nextBuildId({ dir: __dirname })
        return fromGit.id
    },
}
