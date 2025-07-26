import React, { useState } from 'react'
import winerData from '../data/winerData'
import { useLocation, useNavigate,  } from 'react-router-dom';
import '../app.css'

const QuizQuctionLayout = () => {

    const naviagteResult =  useNavigate()
    const location = useLocation(); 
    const {datatype,name,type} = location.state || {};
    console.log(name,type);
    
    const [index,setIndex] = useState(0);
    const [quizData] = useState(()=>datatype);
    const [selectValue,setSelectValue] = useState('');

    function handelNext(){
        if (selectValue === "") {
            alert("Please select an option first!");
            return;
        }

        if (selectValue === quizData[index].answer) {
            winerData.write++;
        } else {
            winerData.wrong++;
        }

        setSelectValue(""); 

        if (index < datatype.length - 1) {
            setIndex(prev => prev + 1);
        } else {
            naviagteResult('/Result',{state:{winerData2:winerData}})
        }
    }

    
    function selectopt(e){
         setSelectValue(()=>e.target.innerText) 
    }
    
    
  return (
   <div className="quiz-body">
     <div className='quize-app-body'>
      <h1>{name + " | " + type}</h1>
      <hr />
      <h2>{index+1}. {quizData[index].question}</h2>
      <ul>
            {quizData[index].options.map((option, i) => (
                <li key={i} onClick={selectopt} style={{backgroundColor: option === selectValue ? "lightgray" : "white",}}>
                    {option}
                </li>
            ))}
      </ul>
      <button onClick={handelNext}>next</button>
      <div className='index'>{index+1} out of {datatype.length}</div>
    </div>
   </div>
    )
  

}

export default QuizQuctionLayout
