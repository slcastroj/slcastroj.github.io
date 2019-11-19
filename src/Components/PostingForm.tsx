import React, { useState } from 'react';
import PostCategory from '../State/PostCategory';
import update from 'immutability-helper';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addPostBuilder } from '../State/ActionCreators';

interface IPostingFormProps {
    category: PostCategory;
    onPost: (title: string, content: string) => void;
}

interface IPostingFormState {
    title: string;
    content: string;
}

const initialState = {
    title: '',
    content: ''
};

export const PostingForm = (props: IPostingFormProps) => {
    const [state, setState] = useState<IPostingFormState>(initialState);

    function onInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        switch (e.target.name) {
            case 'title':
                setState(update(state, { title: { $set: e.target.value } }));
                return;
            case 'content':
                setState(update(state, { content: { $set: e.target.value } }));
                return;
        }
    }

    function onPost() {
        const { title, content } = state;
        props.onPost(title, content);
    }

    return <form className='row PostingForm' onSubmit={(e) => e.preventDefault()}>
        <div className='col-12 mb-3'>
            <label>Título:</label>
            <input type='text' name='title' value={state.title} className='form-control' onChange={onInputChange} />
        </div>
        <div className='col-12 mb-3'>
            <label>Contenido:</label>
            <textarea name='content' rows={5} value={state.content} style={{ resize: 'none' }} className='form-control' onChange={onInputChange}></textarea>
        </div>
        <div className='col-12 text-right'>
            <button className='btn btn-primary' onClick={onPost}>Publicar</button>
        </div>
    </form>;
};

const mapPostingFormDispatch = (dispatch: Dispatch, props: { category: PostCategory }) => {
    return {
        category: props.category,
        onPost: (title: string, content: string) => dispatch(addPostBuilder(title, content, props.category))
    };
};

export const EnhancedPostingForm = connect(null, mapPostingFormDispatch)(PostingForm);