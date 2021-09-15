import {takeEvery, call, fork, put} from 'redux-saga/effects';
import * as api from '../api/users';
import * as actions from '../actions/userActions';
import {GET_USERS} from '../actions/types';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.setUsers(result.data.results));
  } catch (e) {
    console.log(e);
  }
}

function* watchGetUsers() {
  yield takeEvery(GET_USERS, getUsers);
}

const userSagas = [fork(watchGetUsers)];

export default userSagas;
