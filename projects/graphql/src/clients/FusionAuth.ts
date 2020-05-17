import { v4 as uuidv4 } from 'uuid'

import gravatar from './gravatar'

import {
    FusionAuthClient,
    RegistrationResponse,
} from '@fusionauth/typescript-client'
import ClientResponse from '@fusionauth/typescript-client/build/src/ClientResponse'

const {
    FUSIONAUTH_API_KEY,
    FUSIONAUTH_APPLICATION_ID,
    FUSIONAUTH_URL,
} = process.env

console.log(FUSIONAUTH_API_KEY, FUSIONAUTH_APPLICATION_ID, FUSIONAUTH_URL)

const fusionAuthClient = new FusionAuthClient(
    FUSIONAUTH_API_KEY || '',
    FUSIONAUTH_URL || '',
)

interface LoginParams {
    email: string
    password: string
}

interface RegisterAccountParams {
    email: string
    name: string
    password: string
}

const registerAccount = async (
    params: RegisterAccountParams,
): Promise<ClientResponse<RegistrationResponse> | undefined> => {
    try {
        const uuid = uuidv4()

        return fusionAuthClient.register(uuid, {
            registration: {
                applicationId: FUSIONAUTH_APPLICATION_ID,
            },
            user: {
                fullName: params.name,
                email: params.email,
                password: params.password,
            },
        })
    } catch (err) {
        console.error(err)
    }
}

const login = async (params: LoginParams) => {
    try {
        const loginResponse = await fusionAuthClient.login({
            loginId: params.email,
            password: params.password,
        })

        return {
            token: loginResponse.response.token,
            id: loginResponse.response.user?.id,
            email: loginResponse.response.user?.email,
            name: `${loginResponse.response.user?.firstName} ${loginResponse.response.user?.lastName}`,
        }
    } catch (err) {
        throw new Error('login failed')
    }
}

const retrieveUserByEmail = async (email: string) => {
    try {
        const retrieveUserByEmailResponse = await fusionAuthClient.retrieveUserByEmail(
            email,
        )

        return {
            id: retrieveUserByEmailResponse?.response?.user?.id,
            email: retrieveUserByEmailResponse?.response?.user?.email || '',
            name: `${String(
                retrieveUserByEmailResponse.response.user?.firstName,
            )} ${retrieveUserByEmailResponse.response.user?.lastName}`,
            imageUrl:
                retrieveUserByEmailResponse.response.user?.imageUrl ||
                gravatar.getUrl(
                    retrieveUserByEmailResponse?.response?.user?.email,
                ),
        }
    } catch (err) {
        console.error(err)
    }
}

const verifyToken = async (token: string) => {
    try {
        console.log('tokeen:', token)
        return fusionAuthClient.validateJWT(token)
    } catch (err) {
        return undefined
    }
}

export {
    fusionAuthClient,
    login,
    registerAccount,
    retrieveUserByEmail,
    verifyToken,
}
