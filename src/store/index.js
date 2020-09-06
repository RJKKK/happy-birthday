import React,{useReducer} from "react";
import {accountDetail,accountDetailInitialState} from './accountDetail'
import {auth,authInitialState} from './auth'
const myContext = React.createContext();
const ContextProvider = props => {
    const [accountDetailState, accountDetailDispatch] = useReducer(accountDetail,accountDetailInitialState);
    const [authState,authDispatch] = useReducer(auth,authInitialState)
    return (
        <myContext.Provider value={
           {
                accountDetailState, accountDetailDispatch,
                authState,authDispatch
            }
        }>
            {props.children}
        </myContext.Provider>
    );
};
export { myContext, ContextProvider}
