import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail';
import link from 'next/link';
export default function Home() {

  return (
    <div className="divide-y divide-blue-400 md:divide-y-8">
      <Head>
        <title>Adam Portfolio</title>
        <link rel="icon" href="/public/favicon.ico" />

      </Head>
      <Header />
      <Thumbnail />
      <Footer />
    </div>
  );
}
