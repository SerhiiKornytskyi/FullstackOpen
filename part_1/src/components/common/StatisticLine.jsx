const StatisticLine = ({ text, val }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{val}</td>
    </tr>
  )
}

export default StatisticLine;