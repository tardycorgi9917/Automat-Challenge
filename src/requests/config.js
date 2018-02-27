import axios from 'axios';

const apiUrl = "https://hacker-news.firebaseio.com/v0/";

export const item = "item";
export const user = "user";
export const topStories = "topstories";

export function generateInstance(param){
    const instance = axios.create({
        baseURL: apiUrl + param,
    });
    return instance;
}