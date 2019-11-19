import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ForumSelector = () => {
    let { pathname } = useLocation();
    return <section className='ForumSelector row p-0 p-xl-5'>
        <div className='col-12 navbar navbar-expand-xl'>
            <div className='navbar-nav mx-auto mt-0 mt-xl-5'>
                <Link className='display-4 navbar-link mx-5 my-3 text-center' to={`${pathname}/general`}>
                    <i className='fas fa-archive fa-xs'></i><br />
                    General
                </Link>
                <Link className='display-4 navbar-link mx-5 my-3 text-center' to={`${pathname}/help`}>
                    <i className='fas fa-hands-helping fa-xs'></i><br />
                    Ayuda
                </Link>
                <Link className='display-4 navbar-link mx-5 my-3 text-center' to={`${pathname}/questions`}>
                    <i className='fas fa-question-circle fa-xs'></i><br />
                    Preguntas
                </Link>
                <Link className='display-4 navbar-link mx-5 my-3 text-center' to={`${pathname}/offtopic`}>
                    <i className='fas fa-dice fa-xs'></i><br />
                    Offtopic
                </Link>
            </div>
        </div>
    </section>;
};
