import React, { useState,useEffect } from 'react'
import VaccinationByAge from '../Components/VaccinationByAge'
import VaccinationByState from '../Components/VaccinationByState'
import VaccinationCategory from '../Components/VaccinationCategory'
import axios from 'axios';

const VaccinationContainer = (props) => {
    const [data, setData] = useState(null)
    const [vByAge, setVByAge] = useState(null)
    const [vByState, setVByState] = useState(null)
    const getData = async ()=>{
        try {
            const url = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&`

             const response =  await axios.get(url)
            const vaccination =  response.data.topBlock.vaccination;
            const vaccinationByAge =  response.data.vaccinationByAge;
            const getByState =  response.data.getBeneficiariesGroupBy;
            setData(vaccination)
            setVByAge(vaccinationByAge)
            setVByState(getByState)
            
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
     getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stateID,props.districtID]) 

    return (
        <div className="VaccinationContainer">
            {data!==null?(<VaccinationCategory vaccination={data}/>):(<h3>LOADING..</h3>)}
            {vByAge!==null?(<VaccinationByAge vaccinationByAge={vByAge}/>):(<h3>LOADING..</h3>)}
            {vByState!==null?(<VaccinationByState getByState ={vByState} stateVal={props.stateID} districtVal={props.districtID} />):(<h3>LOADING..</h3>)}
        </div>
    )
}

export default VaccinationContainer
