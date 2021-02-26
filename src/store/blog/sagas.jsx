import * as contentful from 'contentful'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { actions } from './../Blog'
import * as types from './types'

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

const fetchPosts = () => client.getEntries()

export function* fetchingBlogPosts() {
  try {
    const posts = yield call(fetchPosts)
    console.log(posts)
    yield put(actions.success(posts.items))
  } catch (e) {
    console.log(e)
    yield put(actions.error(e))
  }
}

export default function* sagas() {
  yield all([
    takeLatest(types.GET_BLOG_ASYNC.PENDING, fetchingBlogPosts)
  ])
}
