import React, { useState } from 'react';
import update from 'immutability-helper';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { signupBuilder, loginBuilder } from '../State/ActionCreators';
import { connect } from 'react-redux';

export interface ISignupInfo {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    birth: string;
}

interface ILoginPageProps {
    onSignup: (info: ISignupInfo) => void;
    onLogin: (info: { username: string, password: string }) => void;
}

interface ILoginPageState {
    signup: {
        firstName?: string,
        lastName?: string,
        username?: string,
        email?: string,
        password?: string,
        birth?: string
    };
    login: {
        username?: string;
        password?: string;
    };
}

const nowMinus16 = new Date();
nowMinus16.setFullYear(nowMinus16.getFullYear() - 18);
const nm16 = nowMinus16.toISOString().slice(0, 10);
const initialState = {
    login: {},
    signup: {
        birth: nm16
    }
};

export const LoginPage = (props: ILoginPageProps) => {
    const [state, setState] = useState<ILoginPageState>(initialState);

    function onSignupChange(e: React.ChangeEvent<HTMLInputElement>) {
        switch (e.target.name) {
            case 'firstName':
                setState(update(state, { signup: { firstName: { $set: e.target.value } } }));
                break;
            case 'lastName':
                setState(update(state, { signup: { lastName: { $set: e.target.value } } }));
                break;
            case 'email':
                setState(update(state, { signup: { email: { $set: e.target.value } } }));
                break;
            case 'birth':
                setState(update(state, { signup: { birth: { $set: e.target.value } } }));
                break;
            case 'username':
                setState(update(state, { signup: { username: { $set: e.target.value } } }));
                break;
            case 'password':
                setState(update(state, { signup: { password: { $set: e.target.value } } }));
                break;
        }
    }

    function onLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
        switch (e.target.name) {
            case 'username':
                setState(update(state, { login: { username: { $set: e.target.value } } }));
                break;
            case 'password':
                setState(update(state, { login: { password: { $set: e.target.value } } }));
                break;
        }
    }

    function onSignup() {
        const info: ISignupInfo = {
            firstName: state.signup.firstName!,
            lastName: state.signup.lastName!,
            email: state.signup.email!,
            birth: state.signup.birth!,
            username: state.signup.username!,
            password: state.signup.password!
        };

        props.onSignup(info);
    }

    function onLogin() {
        props.onLogin({ username: state.login.username!, password: state.login.password! });
    }

    return <main className='row LoginPage'>
        <section className='col-6 p-4 border-right'>
            <h3 className='mb-5'>Registrarse</h3>
            <form className='row'>
                <div className='col-6 control-group'>
                    <label>Nombre:</label>
                    <input type='text' value={state.signup.firstName} className='form-control' onChange={onSignupChange} name='firstName' />
                </div>
                <div className='col-6 control-group'>
                    <label>Apellido:</label>
                    <input type='text' value={state.signup.lastName} className='form-control' onChange={onSignupChange} name='lastName' />
                </div>
                <div className='col-12 mb-3'></div>
                <div className='col-6 control-group'>
                    <label>Correo electrónico:</label>
                    <input type='email' value={state.signup.email} className='form-control' onChange={onSignupChange} name='email' />
                </div>
                <div className='col-6 control-group'>
                    <label>Fecha de nacimiento:</label>
                    <input type='date' value={state.signup.birth!} max={nm16} className='form-control' onChange={onSignupChange} name='birth' />
                </div>
                <div className='col-12 mb-3'></div>
                <div className='col-6 control-group'>
                    <label>Nombre de usuario:</label>
                    <input type='text' value={state.signup.username} className='form-control' onChange={onSignupChange} name='username' />
                </div>
                <div className='col-6 control-group'>
                    <label>Contraseña:</label>
                    <input type='password' value={state.signup.password} className='form-control' onChange={onSignupChange} name='password' />
                </div>
                <div className='col-12 text-right mt-3'>
                    <Link to='/signup-forward' className='btn btn-primary' onClick={onSignup}>Registrarse</Link>
                </div>
            </form>
        </section>
        <section className='col-6 p-4'>
            <h3 className='mb-5'>Iniciar Sesión</h3>
            <form className='row'>
                <div className='col-6 control-group'>
                    <label>Nombre de usuario:</label>
                    <input type='text' value={state.login.username} className='form-control' onChange={onLoginChange} name='username' />
                </div>
                <div className='col-6 control-group'>
                    <label>Contraseña:</label>
                    <input type='password' value={state.login.password} className='form-control' onChange={onLoginChange} name='password' />
                </div>
                <div className='col-12 text-right mt-3'>
                    <Link to='/' className='btn btn-primary' onClick={onLogin}>Iniciar sesión</Link>
                </div>
            </form>
        </section>
    </main>;
};

const mapLoginPageDispatch = (dispatch: Dispatch) => {
    return {
        onSignup: (info: ISignupInfo) => dispatch(signupBuilder(info)),
        onLogin: (info: { username: string, password: string }) => dispatch(loginBuilder(info))
    };
};

export const EnhancedLoginPage = connect(null, mapLoginPageDispatch)(LoginPage);