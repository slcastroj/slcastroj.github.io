import IStoreState from './IStoreState';
import PostCategory from './PostCategory';
import PostType from './PostType';
import { StoreActionType, ADD_COMMENT, SIGNUP, LOGIN, LOGOUT, ADD_POST } from './StoreActionType';
import update from 'immutability-helper';

const initialState: IStoreState = {
    isLoggedIn: false,
    users: [
        {
            username: 'sheemin',
            password: 'hola1234'
        }
    ],
    posts: [
        {
            id: 0,
            author: 'Admin',
            title: 'MVP!',
            content: '¡Hemos alcanzado la primera versión de nuestra página! :) muchas gracias a todos los que nos apoyan',
            publicationDate: new Date(),
            category: PostCategory.Announcement,
            type: PostType.System,
            comments: [
                {
                    author: 'UnUsuarioReal256',
                    content: ':OOO nice ',
                    publicationDate: new Date()
                }
            ]
        },
        {
            id: 1,
            author: 'Sheemin',
            title: 'Pues, hola (?)',
            content: 'Bienvenidos al foro general, este foro es sobre todo para publicaciones meta y comentarios sobre los anuncios',
            publicationDate: new Date(),
            category: PostCategory.General,
            type: PostType.User
        }
    ]
};

export default function StoreReducer(state: IStoreState = initialState, action: StoreActionType): IStoreState {
    switch (action.type) {
        case ADD_COMMENT:
            return update(state, {
                posts: {
                    [action.postId]: {
                        comments: {
                            $push: [
                                {
                                    author: action.author,
                                    content: action.content,
                                    publicationDate: new Date()
                                }
                            ]
                        }
                    }
                }
            });
        case SIGNUP:
            return update(state, {
                users: {
                    $push: [
                        {
                            username: action.username,
                            password: action.password
                        }
                    ]
                }
            });
        case LOGIN:
            return update(state, {
                isLoggedIn: { $set: true },
                user: { $set: action.username }
            });

        case LOGOUT:
            return update(state, {
                isLoggedIn: { $set: false },
                user: { $set: undefined }
            });
        case ADD_POST:
            return update(state, {
                posts: {
                    $push: [
                        {
                            id: state.posts.length,
                            title: action.title,
                            content: action.content,
                            comments: [],
                            author: state.user || '',
                            category: action.category,
                            type: PostType.User,
                            publicationDate: new Date()
                        }
                    ]
                }
            });
        default:
            return state;
    }
}