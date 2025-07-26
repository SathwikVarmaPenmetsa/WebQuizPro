
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import winerData from '../data/winerData';
import './ResultDisplay.css'


const ResultDisplay = () => {

    const location = useLocation(); 
    const {winerData2} = location.state || {};
    
    const [state,setState] = useState(winerData2)

    const navagateBack = useNavigate()

    function handelRestart(){
        setState({...winerData2,write:0,wrong:0})
        winerData.write=0;
        winerData.wrong=0;
        navagateBack('/Quiz');
    }

    const getMessage = () => {
        if (state.write === 20) return "Perfect! 🏆";
        if (state.write >= 15) return "Excellent Work! 🎉";
        if (state.write >= 10) return "Good Job! 👍";
        return "Keep Practicing! 💪";
    };

    
  return (
    <div className='resultDev slide-in-bottom'>
      <p>You scored <strong>{state.write}</strong> out of <strong>{state.write+state.wrong}</strong></p>
      <p>{getMessage()}</p>
      <button onClick={handelRestart}>restart</button>
    </div>
  )
}

export default ResultDisplay
