import { ROUTER_DID_CHANGE } from 'redux-router/lib/constants';

export default function menuReducer(state = {active: '/poll'}, action) {
    switch (action.type) {
    case ROUTER_DID_CHANGE:
        return { active: action.payload.location.pathname };
    default:
        return state;
    }
}
