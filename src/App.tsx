import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Details } from './components/Details';
import { Gallery } from './components/Gallery';
import { Family } from './components/Family';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 transition-colors duration-200">
      <Navbar />
      <Hero />
      <About />
      <Details />
      <Gallery />
      <Family />
      <Contact />
    </div>
  );
}

export default App;