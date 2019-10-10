import {put, takeLatest, all} from 'redux-saga/effects';
import {LOAD_USERS, USERS_LOADED, GET_USER, USER_RECEIVED} from '../actions';

const JSON_PLACE_HOLDER = 'https://jsonplaceholder.typicode.com';

function* loadUsers() {
    const json = yield fetch(`${JSON_PLACE_HOLDER}/users`)
        .then(response => response.json(),);
    yield put({type: USERS_LOADED, users: json,});
}

function* getUser({id}) {
    const json = yield fetch(`${JSON_PLACE_HOLDER}/users/${id}`)
        .then(response => response.json(),);
    yield put({type: USER_RECEIVED, user: json,});
}

function* actionWatcher() {
    yield takeLatest(LOAD_USERS, loadUsers);
    yield takeLatest(GET_USER, getUser);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}