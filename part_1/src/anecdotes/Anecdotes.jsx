import { useState } from 'react'
import Button from '../components/common/Button';

const Anecdotes = ({ anecdotes }) => {
 
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({}); // {index: numOfVotes}

  const handleVote = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] ? votes[selected] + 1 : 1
    }

    setVotes(newVotes);
  }

  const handleSelectAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const getMostVotedAnecdote = () => {
    if (Object.keys(votes).length === 0) {
        return 'No votes yet.'; 
    }
    const mostVoted = Object.keys(votes).reduce((biggestKey, currentKey) => {
        return votes[biggestKey] > votes[currentKey] ? biggestKey : currentKey;
    });
    
    return anecdotes[mostVoted];
  };

  return (
    <section className="anecdotes">
        <h2>Anecdotes:</h2>
        <div>{anecdotes[selected]} <br/> has {votes[selected] || 0} votes </div>
        <div>
            <Button text="Next anecdote" onClick={handleSelectAnecdote} />
            <Button text="Vote" onClick={handleVote} />
        </div>
        <MostVotedAnecdote mostVotedAnecdote={getMostVotedAnecdote()} />
    </section>
  )
}

const MostVotedAnecdote = ({ mostVotedAnecdote }) => {
    return (
        <>
            <h3>Most Voted Anecdote:</h3>
            <div>
                {mostVotedAnecdote}
            </div>
        </>
    )
}

export default Anecdotes