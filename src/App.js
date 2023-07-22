import { useState } from 'react';
import './App.css';
import StrengthMeter from './components/StrengthMeter';

function App() {
  document.title = "Password Checker"

  const [showPassword,setShowPassword] = useState(false);
  const [password,setPassword] = useState('');


  return (
    <div className="App">
      <div className="App-content">
        
        <label className='name'>Password checker</label>

        <div class="field">
          <input type={showPassword? 'text':'password'} placeholder='Please type password' value={password} onChange={el => setPassword(el.target.value)}/>
        </div>

        <div className='checkbox-container'>
          <input className='checkbox-check' type='checkbox' placeholder='Show me the password' checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
          <label className='checkbox-label'>Show me the password</label>
        </div>

        <StrengthMeter password={password}/>


      </div>
    </div>
  );
}

export default App;
