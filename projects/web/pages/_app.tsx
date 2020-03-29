import { Global, css } from '@emotion/core'

import App, { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Global
                    styles={() => css`
                        * {
                            border: none;
                            margin: 0;
                            padding: 0;
                        }

                        html {
                            font-family: Helvetica, Arial, sans-serif;
                            height: 100%;
                        }
                    `}
                />
                {/* <Head>
                    <link
                        href="/static/images/favicon.png"
                        rel="icon"
                        type="image/x-icon"
                    />
                </Head> */}
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        )
    }
}

export default MyApp
