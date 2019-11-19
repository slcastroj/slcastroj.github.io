import React from 'react';
import { IPost } from '../State/IPost';
import { PostSummary } from './PostSummary';
import { connect } from 'react-redux';
import IStoreState from '../State/IStoreState';
import { WithClassName } from './WithClassName';
import PostType from '../State/PostType';
import PostCategory from '../State/PostCategory';
import { EnhancedPostingForm } from './PostingForm';

export type PostFeedProps = WithClassName<{
    posts: IPost[],
    category?: PostCategory,
    publicPosting: boolean
}>;

export const PostFeed = (props: PostFeedProps) => {
    return <section className={'PostFeed row ' + props.className}>
        <div className='col'>
            {props.posts.length > 0 && props.posts.map(post =>
                <PostSummary
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    content={post.content}
                    publicationDate={post.publicationDate}
                    category={post.category}
                    type={post.type} />
            )}
            {props.posts.length <= 0 && <p className='lead'>No hay nada por aquí</p>}
        </div>
        {props.publicPosting && <>
            <div className='col-1 border-right'></div>
            <div className='col-4'>
                <h4 className='mb-4'>¿Algo que quieras compartir?</h4>
                <EnhancedPostingForm category={props.category!} />
            </div>
        </>}
    </section>;
};

function getPostByType(posts: IPost[], type: PostType): IPost[] {
    return posts.filter(x => x.type === type);
}

type hocProps = WithClassName<{
    publicPosting?: boolean
}>;

const systemFeedProps = (state: IStoreState, props: hocProps): PostFeedProps => {
    return {
        posts: getPostByType(state.posts, PostType.System),
        className: props.className,
        publicPosting: props.publicPosting || false
    };
};
export const SystemPostFeed = connect(systemFeedProps)(PostFeed);

const userFeedProps = (state: IStoreState, props: hocProps): PostFeedProps => {
    return {
        posts: getPostByType(state.posts, PostType.User),
        className: props.className,
        publicPosting: props.publicPosting || false
    };
};
export const UserPostFeed = connect(userFeedProps)(PostFeed);

function getPostByCategory(posts: IPost[], category: PostCategory): IPost[] {
    return posts.filter(x => x.category === category);
}

const generalFeedProps = (state: IStoreState, props: hocProps): PostFeedProps => {
    return {
        posts: getPostByCategory(getPostByType(state.posts, PostType.User), PostCategory.General),
        className: props.className,
        publicPosting: props.publicPosting || false,
        category: PostCategory.General
    };
};
export const GeneralPostFeed = connect(generalFeedProps)(PostFeed);

const helpFeedProps = (state: IStoreState, props: hocProps): PostFeedProps => {
    return {
        posts: getPostByCategory(getPostByType(state.posts, PostType.User), PostCategory.Help),
        className: props.className,
        publicPosting: props.publicPosting || false,
        category: PostCategory.Help
    };
};
export const HelpPostFeed = connect(helpFeedProps)(PostFeed);

const questionFeedProps = (state: IStoreState, props: hocProps): PostFeedProps => {
    return {
        posts: getPostByCategory(getPostByType(state.posts, PostType.User), PostCategory.Question),
        className: props.className,
        publicPosting: props.publicPosting || false,
        category: PostCategory.Question
    };
};
export const QuestionsPostFeed = connect(questionFeedProps)(PostFeed);

const offtopicFeedProps = (state: IStoreState, props: hocProps): PostFeedProps => {
    return {
        posts: getPostByCategory(getPostByType(state.posts, PostType.User), PostCategory.Offtopic),
        className: props.className,
        publicPosting: props.publicPosting || false,
        category: PostCategory.Offtopic
    };
};
export const OfftopicPostFeed = connect(offtopicFeedProps)(PostFeed);