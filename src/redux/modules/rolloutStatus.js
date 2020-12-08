// action type
const EXECUTE_STATUS = "EXECUTE_STATUS"

const initialState = {
    //operation: "",
    status: "ALL",
}

// reducer
export default function rolloutStatusReducer(
    state = initialState, 
    action = {}
) {
    switch (action.type) {
        case EXECUTE_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
}
// action creator
export const executeOperation = (status) => ({
    type: EXECUTE_STATUS,
    status, 
});