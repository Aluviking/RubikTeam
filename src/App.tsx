import { lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
// import Hero from './components/Hero'; // Hero original (backup)

const ValueProposition = lazy(() => import('./components/ValueProposition'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-marble-900 text-white-soft">
      <Header />
      <main>
        <HeroVideo />
        <Suspense fallback={null}>
          <ValueProposition />
          <Services />
          <Projects />
          <Pricing />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
