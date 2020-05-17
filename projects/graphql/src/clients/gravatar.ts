import crypto from 'crypto'

/**
 * @param {string} email Gravatar account's email
 * @returns {string} URL for Gravatar image
 */
const getUrl = (email: string | undefined = '') =>
    `https://www.gravatar.com/avatar/${crypto
        .createHash('md5')
        .update(email)
        .digest('hex')}?d=identicon&s=200/`

export default {
    getUrl,
}
