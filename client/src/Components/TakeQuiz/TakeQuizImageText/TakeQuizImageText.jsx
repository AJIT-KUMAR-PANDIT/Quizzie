import React from 'react'
import CssTakeQuizImageText from './TakeQuizImageText.module.css'

const TakeQuizImageText = () => {
    return (
        <>
            <div className={CssTakeQuizImageText.bodyText}>
                <div className={CssTakeQuizImageText.container1}>
                    <div className={CssTakeQuizImageText.qNo}>01/04</div>
                    <div className={CssTakeQuizImageText.qTime}>00:10s</div>
                </div>
                <div className={CssTakeQuizImageText.question}>
                <br/><br/>
                    Your question text comes here, its a sample text.
                    <br/><br/>
                </div>
                <div className={CssTakeQuizImageText.optionsList}>
                    <div className={CssTakeQuizImageText.optionsList1}>
                        <button className={CssTakeQuizImageText.option}>options1<span style={{backgroundImage: "url(assets/img/QuizzieLoader_.svg)" , width: "136px" , height: "121px", backgroundRepeat: "no-repeat"}}></span></button>
                        <br/><br/>
                        <button className={CssTakeQuizImageText.option}>options1</button>
                    </div>
                    <div>
                    <br/><br/>
                    </div>
                    <div className={CssTakeQuizImageText.optionsList2}>
                        <button className={CssTakeQuizImageText.option}>options1</button>
                        <br/><br/>
                        <button className={CssTakeQuizImageText.option}>options1</button>
                    </div>
                </div>
                <br/><br/>
                <button className={CssTakeQuizImageText.Next}>Next</button>
            </div>
        </>
    )
}

export default TakeQuizImageText;