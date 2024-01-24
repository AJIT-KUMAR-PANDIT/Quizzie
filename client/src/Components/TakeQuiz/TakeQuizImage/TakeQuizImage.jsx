import React from 'react'
import CssTakeQuizImage from './TakeQuizImage.module.css'

const TakeQuizImage = () => {
    return (
        <>
            <div className={CssTakeQuizImage.bodyText}>
                <div className={CssTakeQuizImage.container1}>
                    <div className={CssTakeQuizImage.qNo}>01/04</div>
                    <div className={CssTakeQuizImage.qTime}>00:10s</div>
                </div>
                <div className={CssTakeQuizImage.question}>
                <br/><br/>
                    Your question text comes here, its a sample text.
                    <br/><br/>
                </div>
                <div className={CssTakeQuizImage.optionsList}>
                    <div className={CssTakeQuizImage.optionsList1}>
                        <button className={CssTakeQuizImage.option} style={{backgroundImage: "url(assets/img/QuizzieLoader311.svg)" , backgroundSize: "contain" , backgroundRepeat: "no-repeat"}}></button>
                        <br/><br/>
                        <button className={CssTakeQuizImage.option} style={{backgroundImage: "url(assets/img/QuizzieLoader311.svg)" , backgroundSize: "contain" , backgroundRepeat: "no-repeat"}}></button>
                    </div>
                    <div>
                    <br/><br/>
                    </div>
                    <div className={CssTakeQuizImage.optionsList2}>
                        <button className={CssTakeQuizImage.option} style={{backgroundImage: "url(assets/img/QuizzieLoader311.svg)" , backgroundSize: "contain" , backgroundRepeat: "no-repeat"}}></button>
                        <br/><br/>
                        <button className={CssTakeQuizImage.option} style={{backgroundImage: "url(assets/img/QuizzieLoader311.svg)" , backgroundSize: "contain" , backgroundRepeat: "no-repeat"}}></button>
                    </div>
                </div>
                <br/><br/>
                <button className={CssTakeQuizImage.Next}>Next</button>
            </div>
        </>
    )
}

export default TakeQuizImage;