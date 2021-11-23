import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const VaccineMap = (props) => {
  const [xAxis, setXAxis] = useState([])
  const [yAxisDose1, setYAxisDose1] = useState([])
  const [yAxisDose2, setYAxisDose2] = useState([])
  const [yAxisTotal, setYAxisTotal] = useState([])

  useEffect(()=>{
    if(props.radioVal==="lastDays"){
    let xAxisList = []
    let yDose1AxisList = []
    let yDose2AxisList = []
    let yTotalAxisList = []
    props.lastDays.forEach((value)=>{
      xAxisList.push(value.vaccine_date)
      yDose1AxisList.push(value.dose_1)
      yTotalAxisList.push(value.total)
      yDose2AxisList.push(value.dose_2)
    });
    
    setXAxis(xAxisList)
    setYAxisDose1(yDose1AxisList)
    setYAxisDose2(yDose2AxisList)
    setYAxisTotal(yTotalAxisList)
  }
  else if (props.radioVal==="today"){
   
   let xAxisList = []
   let yDose1AxisList = []
   let yDose2AxisList = []
   let yTotalAxisList = []
   props.todayData.forEach((value)=>{
     xAxisList.push(value.label)
     yDose1AxisList.push(value.dose_one)
     yTotalAxisList.push(value.count)
     yDose2AxisList.push(value.dose_two)
   });
   
   setXAxis(xAxisList)
   setYAxisDose1(yDose1AxisList)
   setYAxisDose2(yDose2AxisList)
   setYAxisTotal(yTotalAxisList)

 }
  else{
   
   let xAxisList = []
   let yDose1AxisList = []
   let yDose2AxisList = []
   let yTotalAxisList = []
   props.data.forEach((value)=>{
     xAxisList.push(value.label)
     yDose1AxisList.push(value.dose1)
     yTotalAxisList.push(value.total)
     yDose2AxisList.push(value.dose2)
   });
   
   setXAxis(xAxisList)
   setYAxisDose1(yDose1AxisList)
   setYAxisDose2(yDose2AxisList)
   setYAxisTotal(yTotalAxisList)

 }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.data,props.radioVal]);


 


  const data = {
  labels: xAxis,
  datasets: [
    {
      label: 'Total Doses',
      data: yAxisTotal,
      fill: true,
      backgroundColor: 'rgb(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Dose One',
      data: yAxisDose1,
      fill: true,
      backgroundColor: 'rgb(54, 162, 235,0.2)',
      borderColor: 'rgba(54, 162, 235,1)',
      yAxisID: 'y-axis-2',
    },
    {
      label: 'Dose Two',
      data: yAxisDose2,
      fill: true,
      backgroundColor: 'rgb(173, 194, 169,0.2)',
      borderColor: 'rgb(173, 194, 169)',
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
        <div className="vaccineMap">
            <Line data={data}  />
        </div>
    )
}


export default VaccineMap;
