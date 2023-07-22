import { useState,useEffect } from 'react';
import './meter.css';
import calculatePasswordStrength from '../functions/calculate';
function StrengthMeter({password}) {

    const [strength,setStrength] = useState(-1);
    const [message,setMessage] = useState("Please enter your password");

    const calculate = () =>{
        let result = calculatePasswordStrength(password);
        switch (result){
           case -1:
                return setStrength(-1),setMessage("Please enter your password");

            case 0:
                return setStrength(0),setMessage("Password must contain at least 8 characters");

            case 3:
                return setStrength(3),setMessage("Your password is strong");

            case 2:
                return setStrength(2),setMessage("Your password is medium");

            case 1:
                return setStrength(1),setMessage("Your password is easy");

        }
        
    }

      useEffect(() => {
        return calculate();
      }, [password]);


    return (  
        <>
            <div class={`meter ${
                strength===0 ? 'notEnough': 
                strength===1 ? 'easy': 
                strength===2 ? 'medium' : 
                strength===3 ? 'strong':
                ''
            }`}>
                <div className='section'></div>
                <div className='section'></div>
                <div className='section'></div>
            </div>
            
            <label className='label-desc'>{message}</label>
        </>  
     );
}

export default StrengthMeter;