import gql from 'graphql-tag'
import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'

interface FusionAuthProviderPropTypes {
    children: React.ReactNode
}

interface Account {
    email: string
    name: string
}

const fusionAuthContext = createContext<{
    account: Account | undefined
    login: () => Promise<void>
    logout: () => Promise<void>
}>({
    account: undefined,
    login: async () => undefined,
    logout: async () => undefined,
})
const useFusionAuth = () => useContext(fusionAuthContext)

const GET_ME = gql`
    query getMe {
        me {
            name
            email
            imageUrl
        }
    }
`

const FusionAuthProvider = ({ children }: FusionAuthProviderPropTypes) => {
    const [account, setAccount] = useState<Account | undefined>()

    // For reasons unknown, useQuery() doesn't pass the token cookie
    // the first time it executes, for example, on a page refresh.
    // This is interesting because this provider is used as a child
    // component within the Apollo provider tree.  Subsequent calls via refetch()
    // do pass the cookie as expected, however.
    //
    // However, useLazyQuery() works great in this case.
    const [getMe, { data, loading, refetch }] = useLazyQuery(GET_ME)

    useEffect(() => {
        if (!data?.me && refetch) {
            refetch()
        } else {
            getMe()
        }

        if (data?.me) {
            setAccount(data.me)
        }
    }, [data])

    const login = async () => {
        if (!data?.me && refetch) {
            await refetch()
        } else {
            getMe()
        }
    }

    const logout = async () => {
        setAccount(undefined)

        /**
         * Do a refetch if data.me is defined.  Cookie is cleared,
         * therefore data.me should return null.
         */
        if (data?.me && refetch) {
            await refetch()
        }
    }

    return loading ? null : (
        <fusionAuthContext.Provider
            value={{
                login,
                logout,
                account,
            }}
        >
            {children}
        </fusionAuthContext.Provider>
    )
}

export { fusionAuthContext, useFusionAuth, FusionAuthProvider }
