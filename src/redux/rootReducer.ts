import {combineReducers} from 'redux';
import gitReducer from './News/news.reducer';

const rootReducer = combineReducers({
    news: gitReducer
});
export default rootReducer;
