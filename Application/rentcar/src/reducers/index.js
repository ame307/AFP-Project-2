import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    item: errorReducer,
    item: authReducer
});