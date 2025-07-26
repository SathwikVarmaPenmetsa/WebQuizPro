import React from 'react'
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h1 className="title fade-in">About the Web Development Quiz App</h1>
      <p className="intro fade-in">
        Welcome to the ultimate Web Development Quiz App! This platform is designed to help learners and professionals test and improve their knowledge of various web development technologies through structured quizzes.
      </p>

      <div className="section fade-in">
        <h2>📚 Categories</h2>
        <p>We divide topics into three major areas of web development:</p>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Typescript</li>
          <li><strong>Backend:</strong> Node.js, PHP, .NET , Java, Python , Next.Js</li>
          <li><strong>Database:</strong> MySQL, MongoDB, Redis</li>
        </ul>
      </div>

      <div className="section fade-in">
        <h2>🎯 Levels</h2>
        <p>Each technology is split into three levels to help you grow from beginner to expert:</p>
        <ul>
          <li>🔹 Easy – Basic knowledge and syntax</li>
          <li>⚪ Medium – Applied usage and intermediate logic</li>
          <li>🔸 Hard – Advanced problem-solving and tricky concepts</li>
        </ul>
      </div>

      <div className="section fade-in">
        <h2>📝 Questions</h2>
        <p>Each language or framework contains:</p>
        <ul>
          <li>✔️ 20 Questions per level</li>
          <li>✔️ 60 Questions per topic</li>
          <li>✔️ Multiple-choice format with randomized answers</li>
        </ul>
      </div>

      <div className="section fade-in">
        <h2>🚀 Goal</h2>
        <p>
          Our goal is to create a fun, interactive, and effective way to master web development. Whether you're prepping for interviews or brushing up your skills, this app is for you!
        </p>
      </div>

      <div className="footer fade-in">
        <p>Happy Learning! 💻🔥</p>
      </div>
    </div>
  )
}

export default About
