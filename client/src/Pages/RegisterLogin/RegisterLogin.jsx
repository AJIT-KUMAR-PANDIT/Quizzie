import CssRegisterLogin from './RegisterLogin.module.css'
import Logo from '../../utils/Logo/Logo';
import { useState } from 'react';
import Login from '../../Components/Forms/RegisterLogin/Login/Login';
import SignUp from '../../Components/Forms/RegisterLogin/SignUp/SignUp';

const RegisterLogin = () => {


    const [activeForm, setActiveForm] = useState('signup');

    const toggleForm = (formType) => {
        setActiveForm(formType);
    };




    return (
        <>
            <div className={CssRegisterLogin.body} >
                <div className={CssRegisterLogin.container}>
                    <Logo />
                    <br /><br /><br />
                    <div className={CssRegisterLogin.toggleContainer}>
                        <button
                            className={`${CssRegisterLogin.toggleBtn} ${activeForm === 'signup' ? CssRegisterLogin.activeButton : ''}`}
                            onClick={() => toggleForm('signup')}
                        >
                            Sign Up
                        </button>

                        <button
                            className={`${CssRegisterLogin.toggleBtn} ${activeForm === 'login' ? CssRegisterLogin.activeButton : ''}`}
                            onClick={() => toggleForm('login')}
                        >
                            Login
                        </button>

                    </div>
                    <div className={`${CssRegisterLogin.signupForm} ${activeForm === 'signup' ? CssRegisterLogin.activeFormClass : CssRegisterLogin.inactiveFormClass}`}>
                        <br />
                        <SignUp />
                    </div>

                    <div className={`${CssRegisterLogin.loginForm} ${activeForm === 'login' ? CssRegisterLogin.activeFormClass : CssRegisterLogin.inactiveFormClass}`}>
                        <br />
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterLogin;