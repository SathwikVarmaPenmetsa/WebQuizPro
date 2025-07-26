import React from 'react'
import './pageStyle.css'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  function gotoQuiz(){
    navigate('/Quiz')
  }

  return (
    <div className='homepagediv'>
      <h1 className='slide-in-bottom'>Boost Your Web Development <span className='homepagespan'>Skills!</span> 💻</h1>
      <p className='slide-in-bottom' >Welcome to the ultimate Web Development Quiz App! This platform is designed to help learners and professionals test and improve their knowledge of various web development technologies through structured quizzes..</p>
      <button onClick={gotoQuiz} className='fade-in '>Start Quiz</button>

      <div className="footer fade-in">
        <p>Happy Learning! 💻🔥</p>
      </div>
    </div>
  )
}

export default Home
