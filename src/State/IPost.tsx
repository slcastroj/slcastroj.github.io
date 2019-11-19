import PostType from './PostType';
import PostCategory from './PostCategory';
import { IComment } from './IComment';

export interface IPost {
    id: number;
    author: string;
    publicationDate: Date;
    content: string;
    title: string;
    type: PostType;
    category: PostCategory;
    comments?: IComment[];
}