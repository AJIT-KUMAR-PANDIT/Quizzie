import CssQuizTrendingShowButton from './QuizTrendingShowButton.module.css'


const QuizTrendingShowButton = () => {
    return (
        <>
            <div className={CssQuizTrendingShowButton.container}>
                <div className={CssQuizTrendingShowButton.innerContainer1}> <span className={CssQuizTrendingShowButton.title}>Quiz 1</span><span className={CssQuizTrendingShowButton.number}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;667</span><span>&nbsp;<img src='assets/img/visitorsEye.svg' alt='visitorsEye' /></span></div>
                <div><span className={CssQuizTrendingShowButton.timeStamp}>Created on : 04 Sep, 2023</span></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
    )
}

export default QuizTrendingShowButton;