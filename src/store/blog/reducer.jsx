import initialState from '../../store/initialState';
import * as types from './types';

export default function blogReducer(state=initialState.blog, action) {
  switch (action.type) {
    case types.GET_BLOG_ASYNC.PENDING:
      return {
        ...state,
        loading: true
      }
    case types.GET_BLOG_ASYNC.SUCCESS:
      let blogPosts = action.posts.filter(content => content.sys.contentType.sys.id === 'blogPosts')
      return {
        ...state,
        posts: blogPosts,
        loading: false
      }
    case types.GET_BLOG_ASYNC.ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
