import React from 'react';
import { IPost } from '../State/IPost';
import { Link } from 'react-router-dom';
import '../static/PostSummary.css';

export type PostSummaryProps = IPost & {};

export const PostSummary = (props: PostSummaryProps) => {
    return <Link to={`/posts/${props.id.toString()}`} >
        <article className='PostSummary row border rounded mb-4 p-2'>
            <div className='col-6'>
                <h4>{props.title}</h4>
            </div>
            <div className='col-6 text-right'>
                <small className='text-muted'>{`Publicado el ${props.publicationDate.toLocaleString()} por ${props.author}`}</small>
            </div>
            <div className='col-12 py-2 text-justify'>
                {props.content.slice(0, 120)}
            </div>
        </article>
    </Link >;
};