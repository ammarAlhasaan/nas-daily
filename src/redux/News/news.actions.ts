import {GET_NEWS} from './news.types';
import HackerNews from "../../apis/hacker-news.api";

export const getNews = () => async (dispatch: any) => {
    const response = await HackerNews.get('')
    dispatch({type: GET_NEWS, payload: response.data});
}
