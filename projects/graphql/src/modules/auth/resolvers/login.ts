import { Context } from '../auth.module'
import { login as fusionAuthLogin } from '../../../clients/FusionAuth'

const { COOKIE_DOMAIN } = process.env

const login = async (
    root: {},
    args: {
        input: {
            email: string
            password: string
        }
    },
    context: Context,
) => {
    try {
        if (context.account) {
            throw new Error('You are already logged in')
        }

        console.log(args.input)
        const response = await fusionAuthLogin(args.input)

        context.res.cookie('token', response.token, {
            domain: COOKIE_DOMAIN,
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + 8 * 3600000),
        })

        return true
    } catch (err) {
        throw err
    }
}

export { login }
