import * as React from 'react';
export default (state, action) =>
{
    switch(action.type)
    {
        case 'DELETE_TRANSACTION':
            return Object.assign({}, state, {
                transactions : state.transactions.filter(transaction => transaction.id!==action.payload)
              })
        case 'ADD_TRANSACTION':
            return Object.assign({}, state , {
                transactions : [action.payload, ...state.transactions]
            }
                )
        default: return state
    }
}   