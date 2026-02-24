/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
