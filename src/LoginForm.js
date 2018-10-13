import React from 'react';
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field
          name="email"
          label="Email Address"
          component={renderField}
          type="text"
          placeholder="input email adress"
        />
      </div>

      <div>
        <Field
          name="password"
          label="Password"
          component={renderField}
          type="password"
          placeholder="input login password"
        />
      </div>

      <input
        type="submit"
        value="ログイン"
        disabled={props.pristine || props.submitting}
      />
    </form>
  );
};

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm;
