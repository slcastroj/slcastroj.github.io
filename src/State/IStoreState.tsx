import { IPost } from './IPost';

export interface IUserInfo {
    username: string;
    password: string;
}

export default interface IStoreState {
    isLoggedIn: boolean;
    user?: string;
    users: IUserInfo[];
    posts: IPost[];
}