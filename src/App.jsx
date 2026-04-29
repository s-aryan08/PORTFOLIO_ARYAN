import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import AnimatedCursor from './components/AnimatedCursor';
import ScrollProgress from './components/ScrollProgress';
import CyanBorder from './components/CyanBorder';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Preloader />
      <AnimatedCursor />
      <ScrollProgress />
      {/* 👉 Border container - do not remove */}
      <CyanBorder />
      <Navbar />
      
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 border-t border-white/10 glass mt-12">
        <p>© {new Date().getFullYear()} Aryan Srivastava. All rights reserved.</p>
      </footer>
    </ThemeProvider>
  );
}

export default App;
