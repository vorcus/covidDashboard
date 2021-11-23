import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';

const VaccinationCovrgChart = (props) => {
  const [xAxis, setXAxis] = useState([])
  const [yAxisDose1, setYAxisDose1] = useState([])
  const [yAxisDose2, setYAxisDose2] = useState([])

  useEffect(()=>{
    let xAxisList = []
    let yDose1AxisList = []
    let yDose2AxisList = []
    props.vacCovrg.forEach((value)=>{
      xAxisList.push(value.title)
      yDose2AxisList.push(value.totally_vaccinated)
      yDose1AxisList.push(value.partial_vaccinated)
    });
    // console.log("Chart X", xAxisList)
    // console.log("Chart Y", yAxisList)
    setXAxis(xAxisList)
    setYAxisDose1(yDose1AxisList)
    setYAxisDose2(yDose2AxisList)
  },[props.vacCovrg]);

  const data = {
  labels: xAxis,
  datasets: [
    {
      label: 'Dose 1',
      data: yAxisDose1,
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dose 2',
      data: yAxisDose2,
      backgroundColor: 'rgb(54, 162, 235)',
      stack: 'Stack 1',
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
//   },
// };
    return (
        <div className="vaccinationCovrgChart">
            <h2>Vaccination Coverage</h2>
            <Bar className="chartBar" data={data}  />
        </div>
    )
}

export default VaccinationCovrgChart
