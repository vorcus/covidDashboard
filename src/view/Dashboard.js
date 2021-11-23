import React, { useEffect, useState } from "react";
import AefiRuralUrbanCont from "./AefiRuralUrbanCont";
import CardContainer from "./CardContainer";
import VaccinationContainer from "./VaccinationContainer";
import VaccinationMapContainer from "./VaccinationMapContainer";
import VacinationCoverage from "./VacinationCoverage";
import axios from 'axios';

// State and District Data Import
import state_district from "../assets/data/state_district.json";

const Dashboard = () => {
  const [state, setState] = useState(null);
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [stateDistrict, setStateDistrict] = useState(null);
  const [district, setDistrict] = useState(null);

    const getData = async ()=>{
        try {
            const url = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&`

             const response =  await axios.get(url);
            const getByState =  response.data.getBeneficiariesGroupBy;
            setState(getByState)
            
        }catch (error){
            console.log(error)
        }
    }

  useEffect(() => {
    getData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    setStateDistrict(state_district);
  }, []);

  
  const handleStateChange = (e) => {
    setStateId(e.target.value);
    setDistrictId("")

    let district_list = [];
    for (let i = 0; i < stateDistrict.length; i++) {
      // console.log(stateDistrict[i].state_id)
      if (stateDistrict[i].state_id === parseInt(e.target.value)) {

        district_list.push(stateDistrict[i]);
      }
    }

    setDistrict(district_list);
  };
  const handleDistrictChange = (e) => {

    setDistrictId(e.target.value);
  };

  return (
    <div className="dashboard">
      <div className="navbar-container">
       <h1>Covid Dashboard</h1>
        <div >
          {state !== null ? (
            <div className="navbar-select">
              <div >
                <select onChange={handleStateChange}>
                  <option value="">select-state</option>

                  {state.map((val, index) => {
                    return (
                      <option key={index} value={val.state_id}>
                        {val.state_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div >
                <select onChange={handleDistrictChange}>
                  <option value="">select-district</option>
                  {district !== null
                    ? district.map((val, index) => {
                        return (
                          <option key={index} value={val.district_id}>
                            {val.district_name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
            </div>
          ) : (
            <div>LOADING...</div>
          )}
        </div>
      </div>

      <div className="main-container">
        <CardContainer stateID={stateId} districtID={districtId} />
        <VaccinationMapContainer stateID={stateId} districtID={districtId} />
        <VaccinationContainer stateID={stateId} districtID={districtId} />
        <AefiRuralUrbanCont stateID={stateId} districtID={districtId} />
        <VacinationCoverage stateID={stateId} districtID={districtId} />
      </div>
    </div>
  );
};

export default Dashboard;
