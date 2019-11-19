import React from 'react';
import { Link } from 'react-router-dom';
import { WithClassName } from './WithClassName';
import IStoreState from '../State/IStoreState';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logoutBuilder } from '../State/ActionCreators';

interface IHeaderProps {
    user?: string;
    onLogout: () => void;
}

const Header = (props: WithClassName<IHeaderProps>) => {
    return <header className={'row ' + props.className}>
        <nav className='col-12 navbar navbar-light bg-light px-5 navbar-expand-md'>
            <Link to='/' className='navbar-brand'>Logo</Link>
            <section className='ml-auto navbar-nav'>
                <Link to='/' className='nav-link ml-3'>Inicio</Link>
                {props.user ?
                    <>
                        <Link to='/forum' className='nav-link ml-3'>Foros</Link>
                        <a
                            href='/'
                            className='text-danger nav-link ml-3 border-left pl-4'
                            onClick={props.onLogout}>
                            <small>Cerrar sesión</small>
                        </a>
                    </> :
                    <Link to='/login' className='nav-link ml-3'>Iniciar sesión</Link>
                }
            </section>
        </nav>
    </header>;
};

export default Header;

const mapHeaderProps = (state: IStoreState) => {
    return {
        user: state.user
    };
};

const mapHeaderDispatch = (dispatch: Dispatch) => {
    return {
        onLogout: () => dispatch(logoutBuilder())
    };
};

export const EnhancedHeader = connect(mapHeaderProps, mapHeaderDispatch)(Header);