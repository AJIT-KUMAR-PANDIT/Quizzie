import CssSideNav from './SideNav.module.css';
import Logo from '../../utils/Logo/Logo';
import { useState } from 'react';

const SideNav = ({onButtonClick}) => {

    const [activeBtn, setActiveBtn] = useState('dashboard');

    const toggleBtn = (buttonName) => {
        setActiveBtn(buttonName);
        onButtonClick(buttonName);
    };


    return (
        <>
            <div className={CssSideNav.sideNav} >
                <div>
                    <br/>
                    <Logo size={"3vw"} />
                </div>
                <div className={CssSideNav.container} >
                    <div className={CssSideNav.buttons}>
                        <div className={CssSideNav.dashboardButn} onClick={() => toggleBtn('dashboard')}><button className={activeBtn === 'dashboard' ? CssSideNav.activeBtn : ''}>Dashboard</button></div>
                        <div className={CssSideNav.analyticsButn} onClick={() => toggleBtn('analytics')}><button className={activeBtn === 'analytics' ? CssSideNav.activeBtn : ''}>Analytics</button></div>
                        <div className={CssSideNav.createQuizButn} onClick={() => toggleBtn('createQuiz')}><button className={activeBtn === 'createQuiz' ? CssSideNav.activeBtn : ''}>Create Quiz</button></div>
                    </div>
                </div>
                <div className={CssSideNav.logout} onClick={() => toggleBtn('logout')}>
                    <img src="assets/img/NavLine1.svg" alt="NavLine1" />
                    <br />
                  <button className={activeBtn === 'logout' ? CssSideNav.activeBtn : ''}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default SideNav;