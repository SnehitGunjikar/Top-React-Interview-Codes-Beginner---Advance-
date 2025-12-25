import React, {useState}  from 'react'; 
import './App.css'

const ToggleSwitch = () => {
  const [isOn, setOn] = useState(false);

  return(
    <div>
      <button onClick={() => setOn(!isOn)}>
        {isOn? 'OFF' : 'ON'}
      </button>
      <p>The switch is {isOn ? 'OFF' : 'ON'}</p>
    </div>
  
  )
}

export default ToggleSwitch;