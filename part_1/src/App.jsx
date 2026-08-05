import { useState } from 'react';
import Unicafe from './unicafe/Unicafe';

const App = () => {

  // Unicafe state is in App.jsx as per requirements of the exercise.
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  }); 

  return (
    // Unicafe solution:
    <div>
      <Unicafe clicks={clicks} setClicks={setClicks} />
    </div>
  )
}

export default App