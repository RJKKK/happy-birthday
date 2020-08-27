const initialState = {
    usersAdmin:null,
}
export function auth(state,acction) {
    switch (acction.type) {
        case "reset":
            return initialState
        default :
            return state
    }
}
export let authInitialState = initialState
