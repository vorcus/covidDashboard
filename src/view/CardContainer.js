import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

// Importing assets
import vaccine from "../assets/images/vaccine.png";
import site from "../assets/images/store-sign.png";
import people from "../assets/images/people.png";

const CardContainer = (props) => {
  const [data, setData] = useState(null);

  // Function To Call Api
  const getData = async () => {
    try {
      const url = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${props.stateID}&district_id=${props.districtID}&`;
      const response = await axios.get(url);
      // console.log("respone" , response.data)
      const topBlock = response.data.topBlock;
      setData(topBlock);
      
      // console.log("topblock", topBlock);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.stateID, props.districtID]);

  return (
    <div>
      {data !== null ? (
        <div className="card-container">
          <Card
            img={vaccine}
            title={"Total Vaccination Doses"}
            totalNo={data.vaccination.total}
            subOne={"Dose 1"}
            subTwo={"Dose 2"}
            subOneValue={data.vaccination.tot_dose_1}
            subTwoValue={data.vaccination.tot_dose_2}
          />
          <Card
            img={site}
            title={"Sites Conducting Vaccination"}
            totalNo={data.sites.total}
            subOne={"Government"}
            subTwo={"Private"}
            subOneValue={data.sites.govt}
            subTwoValue={data.sites.pvt}
          />
          {props.stateID === "" ? (
            <Card
              img={people}
              title={"Total Registrations"}
              totalNo={data.registration.total}
              subOne={"Age 18-44"}
              subTwo={"Age 45+"}
              subOneValue={data.registration.cit_18_45}
              subTwoValue={data.registration.cit_45_above}
            />
          ) : (
            <span />
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default CardContainer;
