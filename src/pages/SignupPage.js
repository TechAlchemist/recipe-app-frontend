import { useState } from 'react';

import Input from '../components/Input';

import { createAccountWithEmail } from '../services/firebase';

function SignupPage(props) {

    const [ formState, setFormState ] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleChange(event) {
        setFormState((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));   
    }

    function isFormValid() {
        return !(formState.email && formState.password 
            && (formState.password === formState.confirmPassword));
    }

    function handleSubmit(e) {
        e.preventDefault();
        createAccountWithEmail(formState.email, formState.password);
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
                <Input
                    handleChange={handleChange}
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    type='password'
                    value={formState.confirmPassword}
                    id='confirmPassword'
                />
                <button type='submit' disabled={isFormValid()}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SignupPage;