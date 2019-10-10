
import { USERS_LOADED, USER_RECEIVED } from '../actions';


const reducer = (state = {}, action) => {
    switch (action.type) {
        case USERS_LOADED:
            return { ...state, users: action.users };
        case USER_RECEIVED:
            return { ...state, user: action.user };
        default:
            return state;
    }
};
export default reducer;