import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { required, email } from "redux-form-validators";
import { FormField } from "../../../../Components/FormField.jsx";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        login form
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form__row">
            <Field
              name="email"
              component={FormField}
              type="email"
              label="Email:"
              placeholder=""
              validate={[required(), email()]}
              autoFocus
            />
          </div>
          <div className="form__row">
            <Field
              name="password"
              component={FormField}
              type="password"
              label="Password:"
              validate={[required()]}
              placeholder=""
            />
          </div>
          <div className="form__row form__row--actions">
            <button type="submit" className="button button--block">
              Log in
            </button>
          </div>

          <div className="form__row form__row--center">
            {/* <Link to="/auth/forgot" className="form__link link--primary">
            Forgot password?
          </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "LoginForm" })(LoginForm);
