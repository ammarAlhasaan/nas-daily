import {GET_NEWS} from './news.types';

const INITIAL_STATE = {
    news: [],
    selectedNew: {},
};
const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state, news: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;

