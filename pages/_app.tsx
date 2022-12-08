import '../styles/globals.css'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <Head>
          <title>Shorten</title>
        </Head>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Shorten</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link href="/about">About</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Component {...pageProps} />
        </main>
        <ToastContainer />
      </>
    )
}
