import * as contentful from 'contentful'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { actions } from './../Project'
import * as types from './types'

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

const fetchProjects = () => client.getEntries()

export function* fetchingProjects() {
  try {
    const projects = yield call(fetchProjects)
    yield put(actions.success(projects.items))
  } catch (e) {
    console.log(e)
    yield put(actions.error(e))
  }
}

export default function* sagas() {
  yield all([
    takeLatest(types.GET_PROJECT_ASYNC.PENDING, fetchingProjects)
  ])
}
