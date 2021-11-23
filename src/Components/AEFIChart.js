import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const AEFIChart = (props) => {
  // const [chart, setChart] = useState(null)
  const [xAxis, setXAxis] = useState([])
  const [yAxis, setYAxis] = useState([])

  useEffect(()=>{
    // setChart(props.AEFIdata);
    let xAxisList = []
    let yAxisList = []
    props.AEFIdata.forEach((value)=>{
      xAxisList.push(value.vaccine_date)
      yAxisList.push(value.aefi)
      return (null)
    });

    setXAxis(xAxisList)
    setYAxis(yAxisList)
  },[props.AEFIdata]);

  const data = {
  labels: xAxis,
  datasets: [
    {
      label: 'Total',
      data: yAxis,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};
// const options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
          
//         },
        
//       },
//     ],
//   }
// };
    return (
        <div className="aefiChart">
            <div className="aefiChart-txt">
                <h2>AEFI Reported</h2>
                <p>Overall: {props.aefiPercentage}%</p>
            </div>
            <div className="aefiChart-chart">
            <Line data={data}  />
            </div>
        </div>
    )
}

export default AEFIChart
