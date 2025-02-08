import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import Hero from '@/widgets/Hero/Hero';
import About from '@/widgets/About/About';
import Provide from '@/widgets/Provide/Provide';
import Portfolio from '@/widgets/Portfolio/Portfolio';
import WhatTheySay from '@/widgets/WhatTheySay/WhatTheySay';

import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.MainContainer}>
      <Header />
      <main>
        <Hero />
        <About />
        <Provide />
        <Portfolio />
        <WhatTheySay />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
