import { TopMetaBar } from './components/Header/TopMetaBar';
import { MainHeader } from './components/Header/MainHeader';
import { Navigation } from './components/Header/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academic } from './pages/Academic';
import { Staff } from './pages/Staff';
import { NewsAndNotices } from './pages/NewsAndNotices';
import { Research } from './pages/Research';
import { Publication } from './pages/Publication';
import { Reports } from './pages/Reports';
import { Gallery } from './pages/Gallery';
import { Downloads } from './pages/Downloads';
import { Contact } from './pages/Contact';
import { Apply } from './pages/Apply';
import { NewFooter } from './components/Footer/NewFooter';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopMetaBar />
      <MainHeader />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/news-and-notices" element={<NewsAndNotices />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>
      <NewFooter />
    </div>
  );
}

export default App;