import { BrowserRouter, Route , Routes} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </BrowserRouter>

  );
};