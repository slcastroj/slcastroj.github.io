import React from 'react';
import { addCommentBuilder } from '../State/ActionCreators';
import { connect } from 'react-redux';
import { Component } from 'react';
import IStoreState from '../State/IStoreState';
import { Dispatch } from 'redux';

interface ICommentFormProps {
    postId: number;
    user?: string;
    onAddComment: (postId: number, user: string, content: string) => void;
}

interface ICommentFormState {
    content: string;
}

export class CommentForm extends Component<ICommentFormProps, ICommentFormState> {
    render = () => {
        if (!this.props.user) {
            return <div className='row'>
                <div className='col-12'>
                    <p className='lead'>Inicia sesión para comentar</p>
                </div>
            </div>;
        }
        return <form className='row CommentForm' onSubmit={this.onAddComment}>
            <div className='col-12 form-group'>
                <textarea onChange={this.onContentChange} className='form-control' rows={5} style={{ resize: 'none' }}></textarea>
            </div>
            <div className='col-12 text-right'>
                <input type='submit' value='Comentar' className='btn btn-primary' />
            </div>
        </form>;
    }

    onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        this.setState({ content: e.target.value });
    }

    onAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        const { content } = this.state;
        const { postId, user, onAddComment } = this.props;

        onAddComment(postId, user!, content);
    }
}

const mapCommentFormProps = (state: IStoreState, props: { postId: number }) => {
    return {
        postId: props.postId,
        user: state.user
    };
};

const mapCommentFormDispatch = (dispatch: Dispatch) => {
    return {
        onAddComment: (postId: number, user: string, content: string) => dispatch(addCommentBuilder(postId, user, content))
    };
};

export const EnhancedCommentForm = connect(mapCommentFormProps, mapCommentFormDispatch)(CommentForm);