import React, {useState, useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';

const VaccinationCategory = (props) => {
  const [category, setCategory] = useState([])
  const [vName, setVName] = useState([])

  useEffect(()=>{
    let category = []
    let vName = []
    category.push(props.vaccination.male, props.vaccination.female, props.vaccination.others)
    vName.push(props.vaccination.covishield, props.vaccination.covaxin, props.vaccination.sputnik)
    setCategory(category)
    setVName(vName)
  },[props.vaccination]);


  const gender = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: 'Category',
      data: category,
      backgroundColor: [
        'rgba(255, 99, 132,1)',
        'rgba(54, 162, 235,1)',
        'rgba(255, 206, 86,1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 0.5,
      circumference:180,
      rotation:-90,
      radius:110,
    },
  ],
};

const vaccine = {
    labels: ['Covishield', 'Covaxin', 'Sputnik V'],
    datasets: [
      {
        label: 'Vaccine',
        data: vName,
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
        borderWidth: 0.5,
        circumference:180,
        rotation:-90,
        radius:110,
        
      },
    ],
  };
    return (
        <div className="vaccinationCategory">
            <h2>Vaccination-Category</h2>
            <Doughnut data={gender} />
            <Doughnut data={vaccine}  />
        </div>
    )
}

export default VaccinationCategory
