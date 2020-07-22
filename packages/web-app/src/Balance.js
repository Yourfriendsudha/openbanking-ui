import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getBal,
    getAccountBalances
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

import { setAccountId } from '@openbanking/ui-data/lib/actions/account';

//accounts api list
const Balance = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    const dispatch = useDispatch()

        useEffect( () => {
           // getAccountList(dispatch);
            getBal(dispatch);
            //setAccountId(data.Account[0].AccountId)
            // getAccountById(dispatch, accountId);
           // getAccountBalances(dispatch, accountId)
          }, [])

        //  useEffect( () => {
            
        //     getAccountBalances(dispatch, accountId)
        //   }, [accountId])

    

    return (
        
                <div className="container">
                    <h2>Balance</h2>
                    <InfoDisplay data={data && data.Data && data.Data.Balance && data.Data.Balance[0].Amount} />
                </div>
           
    )
}

export default Balance
