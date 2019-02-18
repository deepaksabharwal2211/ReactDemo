import React from 'react';
import { reduxForm, Field } from "redux-form";
import { RenderInput } from '../atoms/input';

import * as Validate from '../atoms/validation';
import { connect } from 'react-redux';
const Adduser=(props) => {
    const { handleSubmit, reset} = props;
    return(
        <div>
            <p>
            Add user from here !!
            </p>

            <form className="container-form lowmar" onSubmit={handleSubmit}>
            <div>
                <label>ID</label>
                <div>
                    <Field  name="id" validate={Validate.required}  component={RenderInput} type="number" placeholder="Enter Unique Id" />
                </div>
            </div>

            <div>
                <label>Name</label>
                <div>
                    <Field name="Name" validate={Validate.required} component={RenderInput} type="text" placeholder="Enter name" />
                </div>
            </div>
            <div>
                <label>Designation</label>
                <div>
                    <Field name="Designation" validate={Validate.required} component={RenderInput} type="text" placeholder="Enter Designation" />
                </div>
            </div>
            <div>
                <label>Phone</label>
                <div>
                    <Field name="Phone" validate={[Validate.required,Validate.phoneNumber]} component={RenderInput} type="tel" placeholder="Enter Phone" />
                </div>
            </div>
            <div><button type="submit" >Add User</button>

                <button type="button"  onClick={reset}>Clear Values</button>
              
            </div>
        </form>
        </div>
    )
}

export default reduxForm({
    form: 'Adduser' // a unique identifier for this form
})(Adduser)