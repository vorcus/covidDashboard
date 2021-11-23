import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const AgevVccineMap = (props) => {
  const [xAxis, setXAxis] = useState([])
  const [yAxisAge1, setYAxisAge1] = useState([])
  const [yAxisAge2, setYAxisAge2] = useState([])
  const [yAxisAge3, setYAxisAge3] = useState([])
  const [yAxisTotal, setYAxisTotal] = useState([])

  useEffect(()=>{
    if(props.radioVal==="lastDays"){
    let xAxisList = []
    let yAge1AxisList = []
    let yAge2AxisList = []
    let yAge3AxisList = []
    let yTotalAxisList = []
    props.lastDays.forEach((value)=>{
      xAxisList.push(value.vaccine_date)
      yAge1AxisList.push(value.vac_18_45)
      yTotalAxisList.push(value.total)
      yAge2AxisList.push(value.vac_45_60)
      yAge3AxisList.push(value.vac_60_above)
    });
    
    setXAxis(xAxisList)
    setYAxisAge1(yAge1AxisList)
    setYAxisAge2(yAge2AxisList)
    setYAxisAge3(yAge3AxisList)
    setYAxisTotal(yTotalAxisList)
  }
  else if (props.radioVal==="today"){
   
    let xAxisList = []
    let yAge1AxisList = []
    let yAge2AxisList = []
    let yAge3AxisList = []
    let yTotalAxisList = []
    props.todayData.forEach((value)=>{
      xAxisList.push(value.label)
      yAge1AxisList.push(value.vac_18_45)
      yTotalAxisList.push(value.total)
      yAge2AxisList.push(value.vac_45_60)
      yAge3AxisList.push(value.vac_60_above)
    });
    
    setXAxis(xAxisList)
    setYAxisAge1(yAge1AxisList)
    setYAxisAge2(yAge2AxisList)
    setYAxisAge3(yAge3AxisList)
    setYAxisTotal(yTotalAxisList)

 }
  else{
   
    let xAxisList = []
    let yAge1AxisList = []
    let yAge2AxisList = []
    let yAge3AxisList = []
    let yTotalAxisList = []
    props.data.forEach((value)=>{
      xAxisList.push(value.label)
      yAge1AxisList.push(value.vac_18_45)
      yTotalAxisList.push(value.total)
      yAge2AxisList.push(value.vac_45_60)
      yAge3AxisList.push(value.vac_60_above)
    });
    
    setXAxis(xAxisList)
    setYAxisAge1(yAge1AxisList)
    setYAxisAge2(yAge2AxisList)
    setYAxisAge3(yAge3AxisList)
    setYAxisTotal(yTotalAxisList)

    // eslint-disable-next-line react-hooks/exhaustive-deps
 }
  },[props.data,props.radioVal]);


 


  const data = {
  labels: xAxis,
  datasets: [
    {
      label: 'Total',
      data: yAxisTotal,
      fill: true,
      backgroundColor: 'rgb(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '18-44',
      data: yAxisAge1,
      fill: true,
      backgroundColor: 'rgb(54, 162, 235,0.2)',
      borderColor: 'rgba(54, 162, 235,1)',
      yAxisID: 'y-axis-2',
    },
    {
      label: '45-60',
      data: yAxisAge2,
      fill: true,
      backgroundColor: 'rgb(173, 194, 169,0.2)',
      borderColor: 'rgb(173, 194, 169)',
      yAxisID: 'y-axis-2',
    },
    {
      label: 'Above 60',
      data: yAxisAge3,
      fill: true,
      backgroundColor: 'rgb(215, 84, 165,0.2)',
      borderColor: 'rgba(215, 84, 165,0.4)',
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
            <Line data={data} />
        </div>
    )
}


export default AgevVccineMap;
