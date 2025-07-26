import React from 'react'

import LavangeCards from '../components/LavangeCards';
import reactjsLogo from '../assets/logos/react.svg';
import htmlLogo from '../assets/logos/htmlLogo.jfif';
import cssLogo from '../assets/logos/cssLogo.png';
import jsLogo from '../assets/logos/jslogo2.png';
import typescriptLogo from '../assets/logos/TypeScriptLogo.jfif'

import netLogo from '../assets/logos/netLogo.png'
import javaLogo from '../assets/logos/javaLogo.jfif'
import pythonLogo from '../assets/logos/pythonLogo.jfif'
import nextjsLogo from '../assets/logos/NextJsLogo.png'
import nodejsLogo from '../assets/logos/nodejsLogo.png'
import phpLogo from '../assets/logos/phpLogo.jfif'

import mysqlLogo from '../assets/logos/mysqlLogo.jfif'
import mongodbLogo from '../assets/logos/mongodbLogo.webp'
import redisLogo from '../assets/logos/RedisLogo.jfif'

import { useNavigate } from 'react-router-dom';

import data from '../data/quctionData.js'

const{html,css,js,reactQuiz,typeScript,dotNetQuiz,java,python,nodejs,nextjsQuiz,phpQuiz,mysqlQuiz,mongodbEasy,redis} = data;

function Quiz() {

  const LavelNavigat = useNavigate();
  function clickevent(str,logos,data){
    LavelNavigat('/quctionlavel' ,{state : {name:str,imgsrc:logos,data:data} })
    console.log(str,logos);
  }

  return (
    <div className='quizdiv'>
      <div className="frontendcardsdiv card">
        <h1> Frontend <span className='quizwordspan'>Quiz</span> </h1> 
        <div className='frontendcards'>
          <LavangeCards logo = {htmlLogo} name='HTML' onClick={()=>clickevent('HTML', htmlLogo , html)} />
          <LavangeCards logo = {cssLogo} name='Css' onClick={()=>clickevent('CSS', cssLogo , css)} />
          <LavangeCards logo = {jsLogo} name='javaScript'onClick={()=>clickevent('Java script', jsLogo , js)} />
          <LavangeCards logo = {reactjsLogo} name='React js' onClick={()=>clickevent('React js',reactjsLogo,reactQuiz)} />
          <LavangeCards logo = {typescriptLogo} name='typescript' onClick={()=>clickevent('type script', typescriptLogo , typeScript)} />
        </div> 
      </div> 
      <div className="frontendcardsdiv card">
        <h1> Backend <span className='quizwordspan'>Quiz</span> </h1> 
        <div className='frontendcards'>
          <LavangeCards logo = {netLogo} name='.net'  onClick={()=>clickevent('net', netLogo , dotNetQuiz)} />
          <LavangeCards logo = {javaLogo} name='java'  onClick={()=>clickevent('java', javaLogo , java)}/>
          <LavangeCards logo = {pythonLogo} name='python'  onClick={()=>clickevent('python', pythonLogo , python)} />
          <LavangeCards logo = {nodejsLogo} name='node js'  onClick={()=>clickevent('node js', nodejsLogo , nodejs)} />
          <LavangeCards logo = {nextjsLogo} name='next js'  onClick={()=>clickevent('next js', nextjsLogo , nextjsQuiz)} />
          <LavangeCards logo = {phpLogo} name='php'  onClick={()=>clickevent('php', phpLogo , phpQuiz)} />
        </div> 
      </div> 
      <div className="frontendcardsdiv card">
        <h1> Database <span className='quizwordspan'>Quiz</span> </h1> 
        <div className='frontendcards'>
          <LavangeCards logo = {mysqlLogo} name='mysql'  onClick={()=>clickevent('mysql', mysqlLogo , mysqlQuiz)} />
          <LavangeCards logo = {mongodbLogo} name='mongodb'  onClick={()=>clickevent('mongodb', mongodbLogo , mongodbEasy)} />
          <LavangeCards logo = {redisLogo} name='redis'  onClick={()=>clickevent('redis', redisLogo , redis)} />
        </div> 
      </div> 
      <div className="footer fade-in">
        <p>Happy Learning! 💻🔥</p>
      </div>
    </div>
  )
}

export default Quiz
