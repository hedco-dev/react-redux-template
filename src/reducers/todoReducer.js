import { handleActions } from '../utils';
import todoActions from '../actions/todoActionType';
const { SAVE, GETONE, EDIT, DELETE, INITIALIZE } = todoActions;
const INITIAL_STATE = {
    item: {},
    items: [],
    loading: false
};

const reducers = {
    [GETONE]: (state, action) => {
        return { ...state, item: action.item, loading: false }
    },
    [SAVE]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, items: action.payload, loading: false }
        }
    },
    [DELETE]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, items: action.payload, loading: false }
        }
    },
    [EDIT]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, items: action.payload, loading: false }
        }
    },
    [INITIALIZE]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, items: action.payload, loading: false }
        }
    }
}

export default handleActions(INITIAL_STATE, reducers);
