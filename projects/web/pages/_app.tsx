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
                        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
                        @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
                        * {
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
            </>
        )
    }
}

export default MyApp
