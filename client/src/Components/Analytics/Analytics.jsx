import React from 'react';
import CssAnalytics from './Analytics.module.css';

const Analytics = ({ data }) => {
    // Check if  undefined
    if (!data) {
        console.log('Data is undefined!');
        return <p className={CssAnalytics.noData}>No data available.</p>;
    }

    return (
        <><br /><br />

            <div className={CssAnalytics.size}>
                <div className={CssAnalytics.containerOutside}>
                    <div className={CssAnalytics.tableContainer}>
                        <div className={CssAnalytics.textHeading1}>Quiz Analysis<br /><br /></div>
                        <div style={{ overflowY: 'scroll' , height: '500px'}}>
                            <div className={`${CssAnalytics.tableRow} ${CssAnalytics.heading}`} style={{position: 'sticky', top: '0'}}>
                                <div>S.No</div>
                                <div>Quiz Name</div>
                                <div>Created On</div>
                                <div>Impression</div>
                                <div style={{ marginLeft: '299px' }}></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            {data.map((row, index) => (
                                <div
                                    key={index}
                                    className={`${CssAnalytics.tableRow} ${(index + 1) % 2 === 0 ? CssAnalytics.even : CssAnalytics.odd}`}
                                >
                                    <div>{index + 1}</div>
                                    <div>{row.quizName}</div>
                                    <div>{row.createdOn}</div>
                                    <div>{row.impression}</div>
                                    <div><img src='assets/img/uil_edit.svg' /></div>
                                    <div><img src='assets/img/material-symbols_delete.svg' /></div>
                                    <div><img src='assets/img/material-symbols_share.svg' /></div>
                                    <div>Question Wise Analysis</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Analytics;
