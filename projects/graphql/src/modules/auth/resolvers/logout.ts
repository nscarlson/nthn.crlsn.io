import { Context } from '../auth.module'

const { COOKIE_DOMAIN } = process.env

const logout = async (root: {}, args: {}, context: Context) => {
    try {
        if (!context.account) {
            throw new Error('You cannot logout if you are not logged in')
        }

        context.res.cookie('token', '', {
            domain: COOKIE_DOMAIN,
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now()),
        })

        return true
    } catch (err) {
        throw err
    }
}

export default logout
