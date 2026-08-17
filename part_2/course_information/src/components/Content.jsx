import Part from './Part'
import Total from './Total'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.length > 0 ? parts.map(part => (
        <Part key={part.id} part={part} />
      )) : <p>Nothings there.</p>}
      <div>
        <Total parts={parts} />
      </div>
    </div>
    )
}   

export default Content