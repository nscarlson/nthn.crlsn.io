// next.config.js
module.exports = {
    distDir: 'build',
    generateBuildId: async () => {
        return require('child_process')
            .execSync('git rev-parse HEAD')
            .toString()
            .trim()
    },
}
