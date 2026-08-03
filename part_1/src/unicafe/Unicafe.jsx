import { useState } from 'react';
import Button from '../components/common/Button';
import Display from '../components/common/Display';

const labels = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad'
};

const Unicafe = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = { 
      ...clicks,
      good: clicks.good + 1, 
    }
    setClicks(newClicks)
  }

   const handleNeutralClick = () => {
    const newClicks = { 
      ...clicks,
      neutral: clicks.neutral + 1, 
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = { 
      ...clicks,
      bad: clicks.bad + 1, 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <h2>Unicafe</h2>
      <div>
        <h2>
           Give feedback
        </h2>
        <Button text={labels.good} onClick={handleGoodClick} />
        <Button text={labels.neutral} onClick={handleNeutralClick} />
        <Button text={labels.bad} onClick={handleBadClick} />
      </div>
      <div>
        <h2>
           Feedback stats:
        </h2>
        <Display text={`${labels.good}:`} val={clicks.good} />
        <Display text={`${labels.neutral}:`} val={clicks.neutral} />
        <Display text={`${labels.bad}:`} val={clicks.bad} />
      </div>
    </div>
  )
}


export default Unicafe