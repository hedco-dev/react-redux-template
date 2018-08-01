import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk'; 

export default function config(initialState) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk, promiseMiddleware(), reduxImmutableStateInvarient())
    );
};
