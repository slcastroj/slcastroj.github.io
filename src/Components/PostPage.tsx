import React from 'react';
import { IPost } from '../State/IPost';
import IStoreState from '../State/IStoreState';
import PostCategory from '../State/PostCategory';
import PostType from '../State/PostType';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { EnhancedCommentSection } from './CommentSection';

export type PostPageProps = IPost & {};

export const PostPage = (props: PostPageProps) => {
    return <section className='PostPage row p-4 '>
        <div className='col-12 mb-4 px-4 mb-5'>
            <h2>{props.title}</h2>
            <p className='mb-4 font-weight-light text-muted'>{`Publicado el ${props.publicationDate.toLocaleString()} por ${props.author}`}</p>
            <p>{props.content}</p>
        </div>
        <div className='col-12 px-4'>
            <EnhancedCommentSection postId={props.id} />
        </div>
    </section>;
};

const postPageProps = (state: IStoreState, props: { id: number }): PostPageProps => {
    const post = state.posts.find(x => x.id === props.id);
    if (post != null) { return post; }
    return {
        id: -1,
        author: '',
        title: '',
        content: '',
        publicationDate: new Date(0),
        category: PostCategory.General,
        type: PostType.User
    };
};
const EnhancedPostPage = connect(postPageProps)(PostPage);

export const IdentifiedPost = () => {
    let { id } = useParams();
    return <EnhancedPostPage id={parseInt(id!)} />;
};