import CssRegisterLogin from './RegisterLogin.module.css'
import Logo from '../../utils/Logo/Logo';

const RegisterLogin = () => {
  return (
    <>
    <div className={CssRegisterLogin.body} >
        <div className={CssRegisterLogin.container}>
            <Logo />
        </div>
    </div>
    </>
  )
}

export default RegisterLogin;