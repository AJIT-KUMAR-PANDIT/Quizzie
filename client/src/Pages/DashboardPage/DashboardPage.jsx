import SideNav from '../../Components/SideNav/SideNav';
import CssDashboardPage from './DashboardPage.module.css';
import { useState } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Analytics from '../../Components/Analytics/Analytics';

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






    const data = [
        { quizName: 'Quiz 1', createdOn: '2022-01-01', impression: 100 },
        { quizName: 'Quiz 2', createdOn: '2022-01-02', impression: 150 },
        { quizName: 'Quiz 1', createdOn: '2022-01-01', impression: 100 },
        { quizName: 'Quiz 2', createdOn: '2022-01-02', impression: 150 },
        { quizName: 'Quiz 1', createdOn: '2022-01-01', impression: 100 },
        { quizName: 'Quiz 2', createdOn: '2022-01-02', impression: 150 },
        { quizName: 'Quiz 1', createdOn: '2022-01-01', impression: 100 },
        { quizName: 'Quiz 2', createdOn: '2022-01-02', impression: 150 },
        { quizName: 'Quiz 1', createdOn: '2022-01-01', impression: 100 },
        { quizName: 'Quiz 2', createdOn: '2022-01-02', impression: 150 },
      ];




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
                        (
                        <Analytics data={data}/>)
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