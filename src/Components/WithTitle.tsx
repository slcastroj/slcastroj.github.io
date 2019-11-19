import React, { Fragment } from 'react';
import { WithChildren } from './WithChildren';
import { WithClassName } from './WithClassName';

interface WithTitleProps {
    title: string;
}

export const WithTitle = (props: WithClassName<WithChildren<WithTitleProps>>) => {
    return <Fragment>
        <h1 className='mb-4 pl-3'>{props.title}</h1>
        {props.children}
    </Fragment>;
};