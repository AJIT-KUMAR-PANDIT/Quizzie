import SideNav from '../../Components/SideNav/SideNav';
import CssDashboardPage from './DashboardPage.module.css';
import { useState } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';

const DashboardPage = () => {

    const [activeBtn, setActiveBtn] = useState('dashboard');

    const handleButtonClick = (buttonName) => {

        switch (buttonName) {
            case 'dashboard':
                setActiveBtn(buttonName);
                break;
            case 'analytics':
                setActiveBtn(buttonName);
                break;
            case 'createQuiz':
                setActiveBtn(buttonName);
                break;
            case 'logout':
                setActiveBtn(buttonName);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className={CssDashboardPage.body}>
                <div className={CssDashboardPage.sideNav}>
                    <SideNav onButtonClick={handleButtonClick}/>
                </div>
                <div className={CssDashboardPage.container}>
                    {
                        (activeBtn === 'dashboard') ? 
                        (<Dashboard />)
                        : <></>
                    }
                    {
                        (activeBtn === 'analytics') ? 
                        (<Dashboard />)
                        : <></>
                    }
                    {
                        (activeBtn === 'createQuiz') ? 
                        (<Dashboard />)
                        : <></>
                    }
                    {
                        (activeBtn === 'logout') ? 
                        (<Dashboard />)
                        : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default DashboardPage;