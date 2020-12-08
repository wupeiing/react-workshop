import { combineReducers, createStore } from "redux";
import rolloutOperationReducer from "./modules/rolloutOperation";
import rolloutStatusReducer from "./modules/rolloutStatus";
import ringsReducer from "./modules/rings";

const rootReducer = combineReducers({
    rolloutOperation: rolloutOperationReducer,
    rolloutStatus: rolloutStatusReducer,
    rings: ringsReducer,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;