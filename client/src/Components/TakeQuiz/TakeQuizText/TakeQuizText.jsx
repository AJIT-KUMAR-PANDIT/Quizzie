import React from 'react'
import CssTakeQuizText from './TakeQuizText.module.css'

const TakeQuizText = () => {
    return (
        <>
            <div className={CssTakeQuizText.bodyText}>
                <div className={CssTakeQuizText.container1}>
                    <div className={CssTakeQuizText.qNo}>01/04</div>
                    <div className={CssTakeQuizText.qTime}>00:10s</div>
                </div>
                <div className={CssTakeQuizText.question}>
                <br/><br/>
                    Your question text comes here, its a sample text.
                    <br/><br/>
                </div>
                <div className={CssTakeQuizText.optionsList}>
                    <div className={CssTakeQuizText.optionsList1}>
                        <button className={CssTakeQuizText.option}>options1</button>
                        <br/><br/>
                        <button className={CssTakeQuizText.option}>options1</button>
                    </div>
                    <div>
                    <br/><br/>
                    </div>
                    <div className={CssTakeQuizText.optionsList2}>
                        <button className={CssTakeQuizText.option}>options1</button>
                        <br/><br/>
                        <button className={CssTakeQuizText.option}>options1</button>
                    </div>
                </div>
                <br/><br/>
                <button className={CssTakeQuizText.Next}>Next</button>
            </div>
        </>
    )
}

export default TakeQuizText;