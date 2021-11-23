import React, { useState,useEffect } from 'react'
import VaccineMap from '../Components/VaccineMap';
import axios from 'axios';
import AgevVccineMap from '../Components/AgevVccineMap';

const VaccinationMapContainer = (props) => {
    // Setting all Data
    const [data, setData] = useState(null)
    const [todayData, setTodayData] = useState(null)
    const [radio, setRadio] = useState("")
    const [lastDays, setLastDays] = useState(null)
    
    // Age Variables
    const [ageDoseradio, setAgeDose] = useState("")
    const [age30Days, setAge30Days] = useState(null)
    const [ageAll, setAgeAll] = useState(null)
    const [ageToday, setAgeToday] = useState(null)


           // Function To Call Api
           const getData = async ()=>{
        try {
            
            const url = `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&`
            const urlToday = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&`
            const response =  await axios.get(url)
            const resToday=  await axios.get(urlToday)

            // Doses Data
            const weeklyReport = response.data.weeklyReport;
            const lastDays = response.data.last30DaysVaccination;
            const today = resToday.data.vaccinationDoneByTime;
            setData(weeklyReport)
            setLastDays(lastDays)
            setTodayData(today)

            // Age Data
            const ageWise30days = response.data.last30DaysAgeWiseVaccination;
            const ageall = response.data.weeklyVacAgeWiseReport;
            const ageToday = resToday.data.vaccinationDoneByTimeAgeWise;
            setAge30Days(ageWise30days);
            setAgeAll(ageall);
            setAgeToday(ageToday);
            
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getData(); 
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stateID,props.districtID])

    // Getting today,weekly,all
    const radioButton =(e)=>{
        setRadio(e.target.value)
        // console.log("radio", e.target.value)
    }

    return (
        <div className="vaccinationMapContainer">
        <h2>Vaccination Trends</h2>
        <div className="vaccinationMapContainer-btnsgrp">
            <div className="vMC-btnsgrp-lt" onChange={((e)=>setAgeDose(e.target.value))}>
                <label>By Doses
                 <input type="radio" readOnly = {true} name="map" value="doses" />
                 </label>
                <label>By Age
                <input type="radio" readOnly = {true}  name="map" value="age"/></label>
            </div>
            <div className="vMC-btnsgrp-rt" onChange={radioButton}>
            <label>Today
            <input type="radio" readOnly = {true} name="map" value="today"/></label>
            <label>Last 30 lastDays
            <input type="radio" readOnly = {true}  name="map" value="lastDays"/></label>
            <label>All
            <input type="radio" readOnly = {true} name="map" value="all" checked="checked"/></label>
            </div>
        </div>
        {ageDoseradio==="doses"?(<div>{data!==null?(<VaccineMap data={data} todayData={todayData} lastDays={lastDays} radioVal={radio}  />):(<h3>LOADING..</h3>)}</div>):(<div>{ageAll!==null?(<AgevVccineMap data={ageAll} todayData={ageToday} lastDays={age30Days} radioVal={radio} />):(<h3>LOADING..</h3>)}</div>)}
        
        </div>
    )
}

export default VaccinationMapContainer;
