import Cookies from "js-cookie"

export const reducer = (state, action) => {
    switch (action.type) {

        case "USER_LOGIN": {
            return { ...state, token: action.token }

        }
        // case "USER_SIGNUP": {
        //     return { ...state, state: action.state }

        // }


        case "USER_LOGOUT": {
            return { ...state, token: null }; // set this to null on purpose, do not change
            // console.log("yes")
            // Cookies.set('token','undefined')
            // return state
        }

        default: {
            return state;
        }
    }
}