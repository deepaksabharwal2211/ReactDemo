import React from "react";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

const FormValues = ({ values }) =>
  <div className="recentData">
  <p>Recent Data</p>
      {/* {console.log(values)} */}
        {/* {values ? JSON.stringify(values, 0, 2) : String(values)} */}
        {values ? <div> 
            <p>id: {values.id}</p>
            <p>Name : {values.Name}</p>
        <p>Designation : {values.Designation}</p>
        <p>Phone: {values.Phone}</p> </div> : <p>No Data ADDED for this session</p>}

  </div>;

export default connect(state => ({
  values: getFormValues("Adduser")(state)
}))(FormValues);