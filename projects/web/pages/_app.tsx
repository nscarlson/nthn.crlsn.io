import { Global, css } from '@emotion/core'

import App, { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from '../lib/apollo-client'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { FusionAuthProvider } from '../lib/react-fusionauth-wrapper'

interface ApolloProps {
    apollo: ApolloClient<NormalizedCacheObject>
    apolloState?: NormalizedCacheObject
}

class MyApp extends App<ApolloProps> {
    static async getInitialProps({ Component, ctx }: AppContext) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { apollo, Component, pageProps } = this.props

        return (
            <ApolloProvider client={apollo}>
                <Global
                    styles={() => css`
                        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=block');
                        @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=block');
                        * {
                            color: black;
                            border: none;
                            margin: 0;
                            padding: 0;
                        }

                        a {
                            text-decoration: underline;
                        }

                        h1 {
                            font-family: 'Montserrat', monospace;
                            font-size: 16px;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                        }

                        html {
                            font-family: 'Inconsolata', monospace;
                            height: 100%;
                        }
                    `}
                />
                <FusionAuthProvider>
                    <Head>
                        <link
                            href="/images/favicon.png"
                            rel="icon"
                            type="image/x-icon"
                        />
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </FusionAuthProvider>
            </ApolloProvider>
        )
    }
}

export default withApolloClient(MyApp)
