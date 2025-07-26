import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Quiz from './pages/Quiz'
import QuctionLevel from './components/QuctionLevel';
import QuizQuctionLayout from './components/QuizQuctionLayout';
import ResultDisplay from './components/ResultDisplay';

function SetRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/quctionlavel" element={<QuctionLevel  />} />
      <Route path='/QuizQuctionLayout' element={<QuizQuctionLayout />}/>
      <Route path='/Result' element={<ResultDisplay />} />
    </Routes>
  )
}

export default SetRouting
