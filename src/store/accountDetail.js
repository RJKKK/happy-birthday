const initialState = {
    account:null,
    name:null
}
export function accountDetail(state,acction) {
    switch (acction.type) {
        case "reset":
            return initialState
        default :
            return state
    }
}
export let accountDetailInitialState  = initialState
