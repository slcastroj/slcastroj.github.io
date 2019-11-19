import React from 'react';
import { IComment } from '../State/IComment';

interface ICommentFeedProps {
    comments: IComment[];
}

export const CommentFeed = (props: ICommentFeedProps) => {
    return <div className='row CommentFeed'>
        <div className='col-12'>
            {props.comments.length > 0 ? props.comments.map((x, i) =>
                <div className='mb-3 border rounded px-3 py-2' key={i}>
                    <small className='text-muted'>{x.publicationDate.toLocaleString()}</small>
                    <p className='mb-2'><b>{`${x.author} comentó:`}</b></p>
                    <p className='mb-0 p-2'>{x.content}</p>
                </div>) : <p className='lead p-2'>¡Sé el primero en comentar!</p>
            }
        </div>
    </div>;
};