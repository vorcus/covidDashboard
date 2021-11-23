import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const RuralUrbanChart = (props) => {
  const [xAxis, setXAxis] = useState([])
  const [yAxisRural, setYAxisRural] = useState([])
  const [yAxisUrban, setYAxisUrban] = useState([])

  useEffect(()=>{
    let xAxisList = []
    let yRuralAxisList = []
    let yUrbanAxisList = []
    props.ruralUrban.forEach((value)=>{
      xAxisList.push(value.vaccine_date)
      yRuralAxisList.push(value.rural)
      yUrbanAxisList.push(value.urban)
    });
    // console.log("Chart X", xAxisList)
    // console.log("Chart Y", yAxisList)
    setXAxis(xAxisList)
    setYAxisRural(yRuralAxisList)
    setYAxisUrban(yUrbanAxisList)
  },[props.ruralUrban]);

  const data = {
  labels: xAxis,
  datasets: [
    {
      label: 'Rural',
      data: yAxisRural,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Urban',
      data: yAxisUrban,
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

// const options = {
//   scales: {
//     yAxes: [
//       {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         id: 'y-axis-1',
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-2',
//         gridLines: {
//           drawOnArea: false,
//         },
//       },
//     ],
//   },
// };
    return (
        <div className="ruralUrbanChart">
            <h2>Rural Vs Urban Trend</h2>
            <Line data={data}  />
        </div>
    )
}

export default RuralUrbanChart
