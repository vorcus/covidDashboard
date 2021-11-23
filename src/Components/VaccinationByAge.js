import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';



const VaccinationByAge = (props) => {
  const [category, setCategory] = useState([])

  useEffect(()=>{
    let category = []
    category.push(props.vaccinationByAge.vac_18_45, props.vaccinationByAge.vac_45_60, props.vaccinationByAge.above_60)
    setCategory(category)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.vaccinationByAge]);

  const data = {
  labels: ['18-44', '45-60', 'Above 60'],
  datasets: [
    {
      label: '# of Votes',
      data: category,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


    return (
        <div className="vaccinationByAge">
            <h2>Vaccination By Age</h2>
            <Pie data={data} />
        </div>
    )
}

export default VaccinationByAge
