import React, { useState,useEffect } from 'react'
import AEFIChart from '../Components/AEFIChart'
import RuralUrbanChart from '../Components/RuralUrbanChart';
import axios from 'axios';

const AefiRuralUrbanCont = (props) => {
    const [data, setData] = useState(null)
    const [dataPercent, setDataPercent] = useState(null)
    const [dataRU, setDataRU] = useState(null)
    const getData = async ()=>{
        try {
            const urlAEFI = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&date=2021-11-22`

             const response =  await axios.get(urlAEFI)

            const last30DaysAefi = response.data.last30DaysAefi;
            const aefiPercentage = response.data.aefiPercentage;
            setData(last30DaysAefi)
            setDataPercent(aefiPercentage)
            
        }catch (error){
            console.log(error)
        }
    }
    // Getting Rural vs urban data
    const getRU = async ()=>{
        try {
            const urlRU = `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&date=2021-11-22`

             const response =  await axios.get(urlRU)

            const last30DaysVaccination = response.data.last30DaysVaccination;
            setDataRU(last30DaysVaccination)
            
            // console.log("last30DaysVaccination", last30DaysVaccination)
            
        }catch (error){
            console.log(error)
        }


      
    }

    useEffect(() => {
     getData();
     getRU();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stateID,props.districtID])
    
    return (
        <div className="aefiRuralUrbanCont"> 
        {data!==null?(<AEFIChart AEFIdata={data} aefiPercentage={dataPercent} />):(<h3>LOADING..</h3>)}
        {dataRU!==null?(<RuralUrbanChart ruralUrban={dataRU}/>):(<h3>LOADING..</h3>)}
        </div>
    )
}

export default AefiRuralUrbanCont
