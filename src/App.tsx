import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RetrievalAugmentedGeneration from './pages/blog/retrieval-augmented-generation/page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="animated-bg"></div>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/apdas" element={<Home />} />
            <Route path="/apdas/about" element={<About />} />
            <Route path="/apdas/projects" element={<Projects />} />
            <Route path="/apdas/blog" element={<Blog />} />
            <Route path="/apdas/contact" element={<Contact />} />
            <Route path="/apdas/blog/retrieval-augmented-generation" element={<RetrievalAugmentedGeneration />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;