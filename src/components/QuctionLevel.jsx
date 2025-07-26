
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './QuctionLevel.css'
import QuizQuctionLayout from './QuizQuctionLayout';

const QuctionLevel = () => {
   const navgateToquiz = useNavigate()
   const navgateToQuctionLayout = useNavigate()
    const location = useLocation(); 
    const { name,imgsrc,data} = location.state || {};
    const {easy,medium,hard} = data;
   
    function handelClick(){
      navgateToQuctionLayout('/QuizQuctionLayout',{state:{datatype:easy,name:name,type:'EASY'}})
    }

    function handelClickmedium(){
      navgateToQuctionLayout('/QuizQuctionLayout',{state:{datatype:medium,name:name,type:'MEDIUM'}})
    }

    function handelClickhard(){
      navgateToQuctionLayout('/QuizQuctionLayout',{state:{datatype:hard,name:name,type:'HARD'}})
    }
    
  return (
    <div className='quctionLeveldiv'>
       <h2 className='typing'><span>{name}</span> Quctions</h2> <br />
       {imgsrc && <img src={imgsrc} alt="User" width="100" className='fade-in' />}
      <div>
        <button onClick={()=>handelClick()}>😀 easy</button>
        <button onClick={()=>handelClickmedium()} >🧐 medium</button>
        <button onClick={()=>handelClickhard()}>🤯 hard</button>
      </div>
      <button className='backButton' onClick={()=>navgateToquiz('/Quiz')}>⬅️ Back</button>

    </div>
  )
}

export default QuctionLevel
