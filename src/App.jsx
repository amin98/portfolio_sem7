import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Analysis from './pages/Analysis';
import Home from './pages/Home';
import IndividualCase from './pages/IndividualCase';
import IndustryProject from './pages/IndustryProject';
import ProblemDefinition from './pages/analysis/ProblemDefinition';
import Questions from './pages/analysis/Questions';
import CompetitorAnalysis from './pages/analysis/CompetitorAnalysis';
import Brainstorming from './pages/analysis/Brainstorming';

function App() {
  return (
    <Router basename="/semester7/portfolio">
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industry-project" element={<IndustryProject />} />
            <Route path="/individual-case" element={<IndividualCase />} />
            <Route path="/about" element={<About />} />
            <Route path="/individual-case/analysis" element={<Analysis />} />
            <Route path="/individual-case/analysis/problem-definition" element={<ProblemDefinition />} />
            <Route path="/individual-case/analysis/questions" element={<Questions />} />
            <Route path="/individual-case/analysis/competitor-analysis" element={<CompetitorAnalysis />} />
            <Route path="/individual-case/analysis/brainstorming" element={<Brainstorming />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
