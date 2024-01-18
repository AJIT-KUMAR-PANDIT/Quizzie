import React from 'react'
import CssDashboard from './Dashboard.module.css'
import QuizTrendingShowButton from '../QuizTrendingShowButton/QuizTrendingShowButton'

const Dashboard = () => {
    return (
        <>
            <div className={CssDashboard.body}>
                <div className={CssDashboard.container}>
                    <div className={CssDashboard.divGroup1}>
                        <br /><br /><br /><br /><br />
                        <div className={CssDashboard.divGroup2}>
                            <div className={CssDashboard.totalQuiz}>
                                <span>  <span className={CssDashboard.totalQuizNumber1}>12</span><span className={CssDashboard.totalQuizText1}>Quiz<br />Created </span></span>
                            </div>
                            <div className={CssDashboard.totalQuestions}>
                                <span>  <span className={CssDashboard.totalQuestionsNumber1}>110</span><span className={CssDashboard.totalQuestionsText1}>questions<br />Created </span></span>
                            </div>
                            <div className={CssDashboard.totalImpressions}>
                                <span>  <span className={CssDashboard.totalImpressionsNumber1}>989</span><span className={CssDashboard.totalImpressionsText1}>Total<br />Impressions </span></span>
                            </div>
                        </div>
                    </div>
                    <div className={CssDashboard.divGroup3}>
                        <div>
                            <div className={CssDashboard.textHeading1}>Trending Quizs</div>
                            <br/><br/>
                        </div>
                        <div className={CssDashboard.divGroup5}>
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                            <QuizTrendingShowButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;