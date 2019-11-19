import React from 'react';
import { SystemPostFeed } from './PostFeed';
import HelpLines from './HelpLines';

const Home = () => {
    return <main className='Home row'>
        <div className='col-12 col-md-8 p-4'>
            <h2>Anuncios</h2>
            <SystemPostFeed className='p-4' />
        </div>
        <div className='col-12 col-md-4 order-first order-md-last p-4'>
            <HelpLines />
        </div>
    </main>;
};

export default Home;