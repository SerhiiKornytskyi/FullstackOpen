import { useState } from 'react';
import Button from '../components/common/Button';
import Statistics from './Statistics';

const labels = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
  all: 'all',
  average: 'average',
  positive: 'positive',
};

const Unicafe = ({ clicks, setClicks }) => {

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

  const getAverage = () => {
    const avarage =(clicks.good - clicks.bad) / (clicks.good + clicks.neutral + clicks.bad);
    return avarage || 0;
  }

  const getPositive = () => {
    const positive = (clicks.good / (clicks.good + clicks.neutral + clicks.bad)) * 100;
    return positive || 0;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Unicafe</th>
        </tr>
      </thead>
      <tbody>
         <tr>
          <td>
            <h2>
              Give feedback
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <Button text={labels.good} onClick={handleGoodClick} />
            <Button text={labels.neutral} onClick={handleNeutralClick} />
            <Button text={labels.bad} onClick={handleBadClick} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistics clicks={clicks} labels={labels} getAverage={getAverage} getPositive={getPositive} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}


export default Unicafe