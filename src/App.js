import { useEffect, useState } from 'react';
import './App.css';
import ParticlesComponent from './components/particles';

function App() {

  const [activity, setActivity] = useState("");

  useEffect(() => {
    getActivity();
  }, [])

  const getActivity = async() => {
    const response = await fetch(`https://bored.api.lewagon.com/api/activity`);
    const data = await response.json();
    console.log(data.activity);
    setActivity(data.activity);
  }

  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className='container'>
        <h1>
          <span>
            Got BORED?
          </span>
        </h1>
        <p className='text-content'>
          <span>
            Here are some ideas for you
          </span>
        </p>
        <p className='text-content'>
          <span>
            Just click on the button below
          </span>
        </p>
        <div className='arrow-down bounce'></div>
        <button className='app-btn' onClick={getActivity}>Create Activity</button>
        <p className='activity-text'>
          <span>
            {activity}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
