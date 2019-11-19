import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import { EnhancedHeader } from './Components/Header';
import { IdentifiedPost } from './Components/PostPage';
import { ForumSelector } from './Components/ForumSelector';
import { GeneralPostFeed, HelpPostFeed, QuestionsPostFeed, OfftopicPostFeed } from './Components/PostFeed';
import { WithTitle } from './Components/WithTitle';
import { EnhancedLoginPage } from './Components/LoginPage';
import { SignupForward } from './Components/SignupForward';

class App extends React.Component {
    render = () => {
        return <section className='App container-fluid'>
            <BrowserRouter>
                <EnhancedHeader className='mb-5' />
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route path='/posts/:id'><IdentifiedPost /></Route>
                    <Route exact path='/forum'><ForumSelector /></Route>
                    <Route path='/forum/general'>
                        <WithTitle title='Foro General'>
                            <GeneralPostFeed className='p-4' />
                        </WithTitle>
                    </Route>
                    <Route path='/forum/help'>
                        <WithTitle title='Foro de Ayuda'>
                            <HelpPostFeed className='p-4' publicPosting={true} />
                        </WithTitle>
                    </Route>
                    <Route path='/forum/questions'>
                        <WithTitle title='Foro de Preguntas'>
                            <QuestionsPostFeed className='p-4' publicPosting={true} />
                        </WithTitle>
                    </Route>
                    <Route path='/forum/offtopic'>
                        <WithTitle title='Foro Offtopic'>
                            <OfftopicPostFeed className='p-4' publicPosting={true} />
                        </WithTitle>
                    </Route>
                    <Route path='/login'>
                        <EnhancedLoginPage />
                    </Route>
                    <Route path='/signup-forward'>
                        <SignupForward />
                    </Route>
                </Switch>
            </BrowserRouter>
        </section >;
    }
}

export default App;
