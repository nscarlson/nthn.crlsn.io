import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <link
                        href="/static/images/n.png"
                        rel="icon"
                        type="image/gif"
                    />
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp
