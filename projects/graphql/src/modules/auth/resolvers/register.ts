import { registerAccount } from '../../../clients/FusionAuth'

const register = async (
    root: {},
    args: {
        input: {
            email: string
            name: string
            password: string
        }
    },
) => {
    try {
        const registerAccountResponse = await registerAccount({
            email: args?.input?.email,
            name: args?.input?.name,
            password: args?.input?.password,
        })

        return {
            email: registerAccountResponse?.response.user?.email,
            name: registerAccountResponse?.response.user?.fullName,
        }
    } catch (err) {
        throw err
    }
}

export { register }
