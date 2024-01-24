import SideNav from '../../Components/SideNav/SideNav';
import CssDashboardPage from './DashboardPage.module.css';
import { useState, useContext } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Analytics from '../../Components/Analytics/Analytics';
import Modal from '../../Components/Modal/Modal';
import QuizName from '../../Components/QuizName/QuizName';
import ContextApiQuizModal from '../../ContextApi/QuizModal/ContextApiQuizModal';
import QnA from '../../Components/QnA/QnA';
import ContextModalClose from '../../ContextApi/ContextModalClose/ContextModalClose';

const DashboardPage = () => {

    const { close: onCloseq , updateClose: updateCloseq } = useContext(ContextModalClose);

    const [modalOpen, setModalOpen] = useState(false);
    

    const { data: continueBtn, updateData: setContinueBtn } = useContext(ContextApiQuizModal);
    

    const openModal = () => {
        
        if(onCloseq===false){
            setModalOpen(false);
        }else{
            setModalOpen(true); 
        }
        
    };

    const closeModal = () => {
        setContinueBtn(false);
        setModalOpen(false);
        updateCloseq(true);
    };



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
                // setActiveBtn(buttonName);
                openModal(); 
                break;
            case 'logout':
                setActiveBtn(buttonName);
                break;
            default:
                break;
        }
    }

    const closeButton = () => {
        setModalOpen(false);
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
                        <SideNav onButtonClick={handleButtonClick} />
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
                                    <Analytics data={data} />)
                                : <></>
                        }
                        {
                            // (activeBtn === 'createQuiz') ?
                            //     (

                            <Modal isOpen={modalOpen?onCloseq:modalOpen} onClose={onCloseq?closeModal:onCloseq} >
                                {(continueBtn) ?
                                    (
                                       <QnA/>
                                    )
                                    : (
                                        <QuizName closeButton={closeButton} />
                                    )
                                }
                            </Modal>
                            // )
                            // : <></>
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