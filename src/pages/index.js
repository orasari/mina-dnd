import Head from 'next/head';
import LandingPage from '../containers/LandingPage/LandingPage.container.tsx';
import backgroundImage from '../assets/images/landing.png';
import StyledComponentsRegistry from "../lib/styledComponentsRegistry";

export default function Home() {
  return (
    <div>
      <Head>
        <title>slyde.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledComponentsRegistry>
          <LandingPage backgroundImage={backgroundImage}/>
        </StyledComponentsRegistry>
      </main>
    </div>
  );
}
