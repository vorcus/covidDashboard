import React, { useState,useEffect } from 'react'
import VaccinationCovrgChart from '../Components/VaccinationCovrgChart'
import axios from 'axios';

const VacinationCoverage = (props) => {
    const [data, setData] = useState(null)
    const getData = async ()=>{
        try {
            const urlAEFI = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&`

            const response =  await axios.get(urlAEFI)
            const getBeneficiariesGroupBy = response.data.getBeneficiariesGroupBy;
            setData(getBeneficiariesGroupBy)
            
            // console.log("getBeneficiariesGroupBy", getBeneficiariesGroupBy)
            
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
     getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stateID,props.districtID]) 
    return (
        <div className="vacinationCoverage">
           {data!==null?(<VaccinationCovrgChart vacCovrg={data}/>):(<h3>LOADING..</h3>)}
        </div>
    )
}

export default VacinationCoverage
