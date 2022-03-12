import Head from 'next/head'
import Fourth from '../components/Fourth'
import Header from '../components/Header'
import Main from '../components/Main'
import Second from '../components/Second'
import Third from '../components/Third'
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
        <Main />
        <Second />
        <Third />
        <Fourth/>
      </div>
    </div>
  )
}
