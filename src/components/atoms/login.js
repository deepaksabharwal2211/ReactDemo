import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderInput } from '../atoms/input';
import * as Validate from '../atoms/validation';
const Login = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;

    //const { handleSubmit} = props;
    return (
        <form   className="container-form" onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field  name="Email" validate={[Validate.required, Validate.email, Validate.minLength2]} component={RenderInput} type="email" placeholder="Email" />
                </div>
            </div>

            <div>
                <label>Password</label>
                <div>
                    <Field name="Password" validate={Validate.required} component={RenderInput} type="password" placeholder="Password" />
                </div>
            </div>
            <div><button type="submit" disabled={pristine || submitting}>Login</button>

                <button type="button"  onClick={reset}>Clear Values</button>
              
            </div>
        </form>
    )

}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(Login)
