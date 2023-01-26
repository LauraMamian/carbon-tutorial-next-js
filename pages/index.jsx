import TutorialHeader from '../components/TutorialHeader/TutorialHeader';
import LandingPage from './LandingPage';

import { Content, Theme } from '@carbon/react';

export default function Home() {
  return (
    <>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      
      <main className="cds--content">
        <LandingPage />
      </main>
    </>
  )
}