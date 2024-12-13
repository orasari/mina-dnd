import Head from 'next/head';
import LandingPage from '../containers/LandingPage/LandingPage.container.tsx';
import backgroundImage from '../assets/images/landing.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>slyde.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage backgroundImage={backgroundImage}/>
      </main>
    </div>
  );
}
