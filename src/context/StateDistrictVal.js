import React from 'react';
import StateContext from './stateContext';

const StateDistrictVal = (props)=>{
return(
    <StateContext.Provider>
         {props.children}
    </StateContext.Provider>
)
};

export default StateDistrictVal;



