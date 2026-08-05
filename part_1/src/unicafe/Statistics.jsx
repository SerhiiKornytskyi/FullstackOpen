import StatisticLine from "../components/common/StatisticLine";

const Statistics = ({ clicks, labels, getAverage, getPositive }) => {

    const allClicks = clicks.good + clicks.neutral + clicks.bad;

    if (!allClicks || allClicks === 0) {
        return (
            <div>
                No feedback given yet.
            </div>
        );
    }

    return (
       <> 
        <h2>
            Feedback stats:
        </h2>
        <table>
            <tbody>
                <StatisticLine text={labels.good} val={clicks.good} />
                <StatisticLine text={labels.neutral} val={clicks.neutral} />
                <StatisticLine text={labels.bad} val={clicks.bad} />
                <StatisticLine text={labels.all} val={allClicks} />
                <StatisticLine text={labels.average} val={getAverage()} />
                <StatisticLine text={labels.positive} val={`${getPositive()} %`} />
            </tbody>
        </table>
      </>
    )
}

export default Statistics;

