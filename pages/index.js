import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
export default function Home() {
  return (
    <div>
      <Head>
        <title>CoffeSite</title>
        <meta name="description" content="Coffe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Main/>
      </div>
    </div>
  )
}
