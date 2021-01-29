import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/userService';

export default function LoginPage(props) {
    /* component state */
        const [ formState, setFormState ] = useState({
            email: "",
            password: ""
        });
    /* handler functions */
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault(); // disable default behavior
        if(!formValid()) return;  // make sure form is valid
        try {
            await login(formState)
            props.handleSignupOrLogin();
        } catch (error) {
            alert(error.message);
        }
    }
    
    /* helper functions */
    function formValid() {
        return !!(formState.email && formState.password);
    }


    return (
        <main className="Page">
            <div className="container">

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
            <div className="col-sm-12">
                <div className="form-group">
                    <div className="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                            <img alt='login logo' src="https://img.icons8.com/wired/64/000000/login-rounded-right.png" style={{width: 25}} />
                            </span>
                            <input onChange={handleChange} value={formState.email} name="email" placeholder="Email" className="form-control" type="email"/>
                        </div>
                   
                </div>
            </div>

            <div className="col-sm-12">
                <div className="form-group">            
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <img alt='login logo' src="https://img.icons8.com/ios/50/000000/forgot-password.png" style={{width: 25}} />
                        </span>
                        <input onChange={handleChange} value={formState.password} name="password" placeholder="Password" className="form-control" type="password"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-12 text-center">
                    <button 
                        disabled={!formValid()} 
                        value="Login" 
                        className="btn">
                        Login
                    </button>
                    &nbsp;&nbsp;
                    <Link to="/">Cancel</Link>
                </div>
            </div>

            </form>
            </div>
        </main>
    );
};