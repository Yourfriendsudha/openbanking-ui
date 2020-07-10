import React from 'react'
import { connect } from 'react-redux'
import { getAccountList } from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

function Accounts(props) {
    return (
        <div className="mainContainer">
            <h2 className="pageTitle">AISP Information</h2>
            <div className="apiContainer">
                <div className="btnContainer">
                    <button
                        className="buttonLinks"
                        onClick={() => props.getAcccountList()}
                    >
                        Get Account List
                    </button>
                </div>
                <div className="displayInfo">
                    <InfoDisplay data={props.data} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.app.data,
})

const mapDispatchToProps = (dispatch) => ({
    getAcccountList: () => getAccountList(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)