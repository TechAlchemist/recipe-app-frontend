import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../services/userService'

function SignupForm (props) {

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessUnit: '',
    profileImage: '',
    password: '',
    passwordConf: ''
  });

  function handleChange(e) {
    props.updateMessage('');
    setFormState(prevState => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      await signup(formState);
      props.handleSignupOrLogin();
      // Successfully signed up - show home
      props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  function isFormInvalid() {
    return !(formState.firstName && formState.lastName && formState.email && formState.password === formState.passwordConf && formState.businessUnit !== '-');
  }
    return (
      <div className='container'>
        <h1> Sign Up</h1>
        <form className="form-horizontal" onSubmit={handleSubmit} >

          {/* FIRST AND LAST NAME SAME ROW */}
          <div className="form-row align-items-center">
            
              
              {/* FIRST NAME  */}
              <div className="form-group">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="First Name" value={formState.firstName} name="firstName" onChange={handleChange} />
                </div>
              </div>

              {/* LAST NAME  */}
              <div className="form-group">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Last Name" value={formState.lastName} name="lastName" onChange={handleChange} />
                </div>
              </div>
           
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={formState.email} name="email" onChange={handleChange} />
            </div>
          </div>

          {/* BUSINESS UNIT */}
          <div className="form-group">
            <div className="col-sm-12">
              <select className="form-control" value={formState.businessUnit} name="businessUnit" onChange={handleChange}>
                <option> - </option>
                <option> Marketing </option>
                <option> Research and Development </option>
                <option> Planning </option>
                <option> Production </option>
                <option> Human Resources </option>
              </select>
            </div>
          </div>

          {/* PROFILE PICTURE UPLOADER */}
          <div className="form-group">
            <div className="col-sm-12">
              <label>Profile Picture Upload</label>
              <input type="file" className="form-control-file" id="imageUpload" value={formState.profileImage} onChange={handleChange} />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={formState.password} name="password" onChange={handleChange} />
            </div>
          </div>

          {/* PASSWORD CONFIRMATION */}
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={formState.passwordConf} name="passwordConf" onChange={handleChange} />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
}

export default SignupForm;