import PostCategory from "./PostCategory";

export const ADD_COMMENT = 'ADD_COMMENT';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_POST = 'ADD_POST';

export interface IAddCommentAction {
    type: typeof ADD_COMMENT;
    postId: number;
    content: string;
    author: string;
}

export interface ISignupAction {
    type: typeof SIGNUP;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    birth: string;
}

export interface ILoginAction {
    type: typeof LOGIN;
    username: string;
    password: string;
}

export interface ILogoutAction {
    type: typeof LOGOUT;
}

export interface IAddPostAction {
    type: typeof ADD_POST;
    title: string;
    content: string;
    category: PostCategory;
}

export type StoreActionType = IAddCommentAction | ISignupAction | ILoginAction | ILogoutAction | IAddPostAction;