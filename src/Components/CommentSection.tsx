import React from 'react';
import { IComment } from '../State/IComment';
import { CommentFeed } from './CommentFeed';
import { EnhancedCommentForm } from './CommentForm';
import IStoreState from '../State/IStoreState';
import { connect } from 'react-redux';

interface ICommentSectionProps {
    postId: number;
    comments: IComment[];
}

export const CommentSection = (props: ICommentSectionProps) => {
    return <div className='row CommentSection'>
        <div className='col-6'>
            <h4 className='mb-4'>Comentarios</h4>
            <div className='p-2 border rounded' style={{ height: '400px', overflowY: 'scroll', overflowX: 'hidden' }}>
                <CommentFeed comments={props.comments} />
            </div>
        </div>
        <div className='col-6'>
            <h4 className='mb-4'>Comentar:</h4>
            <EnhancedCommentForm postId={props.postId} />
        </div>
    </div>;
};

const mapCommentSectionProps = (state: IStoreState, props: { postId: number }): ICommentSectionProps => {
    return {
        postId: props.postId,
        comments: state.posts.find(x => x.id === props.postId)!.comments || []
    };
};

export const EnhancedCommentSection = connect(mapCommentSectionProps)(CommentSection);