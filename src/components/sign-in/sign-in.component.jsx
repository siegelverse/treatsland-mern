import React from 'react';
import CustomButton from '../custom-button/custom-button.componenet';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.PreventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const {value, name} = e.target

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email an password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required />
                    <FormInput 
                    name='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
