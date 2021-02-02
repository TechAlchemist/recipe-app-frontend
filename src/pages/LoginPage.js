import { useState } from 'react';

import Input from '../components/Input';

import { loginWithEmailAndPass } from '../services/firebase';


function LoginPage(props) {

    const [ formState, setFormState ] = useState({
        email: '',
        password: '',
    });

    function handleChange(event) {
        setFormState((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));   
    }

    function isFormValid() {
        return !( formState.email && formState.password );
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginWithEmailAndPass( formState.email, formState.password )
        props.history.push('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <Input
                    handleChange={handleChange}
                    name='email'
                    placeholder='Email'
                    type='email'
                    value={formState.email}
                    id='email'
                />
                <Input
                    handleChange={handleChange}
                    name='password'
                    placeholder='Password'
                    type='password'
                    value={formState.password}
                    id='password'
                />
                <button type='submit' disabled={isFormValid()}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default LoginPage;