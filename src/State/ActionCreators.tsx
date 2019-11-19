import { IAddCommentAction, ADD_COMMENT, ISignupAction, SIGNUP, ILoginAction, LOGIN, ILogoutAction, LOGOUT, IAddPostAction, ADD_POST } from './StoreActionType';
import { ISignupInfo } from '../Components/LoginPage';
import PostCategory from './PostCategory';

export const addCommentBuilder = (postId: number, author: string, content: string): IAddCommentAction => {
    return {
        type: ADD_COMMENT,
        postId: postId,
        author: author,
        content: content
    };
};

export const signupBuilder = (info: ISignupInfo): ISignupAction => {
    return {
        type: SIGNUP,
        ...info
    };
};

export const loginBuilder = (info: { username: string, password: string }): ILoginAction => {
    return {
        type: LOGIN,
        ...info
    };
};

export const logoutBuilder = (): ILogoutAction => {
    return {
        type: LOGOUT
    };
};

export const addPostBuilder = (title: string, content: string, category: PostCategory): IAddPostAction => {
    return {
        type: ADD_POST,
        title: title,
        content: content,
        category: category
    };
};