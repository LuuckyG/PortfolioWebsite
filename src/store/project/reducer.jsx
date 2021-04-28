import initialState from '../initialState';
import * as types from './types';

export default function projectReducer(state = initialState.projects, action) {
  switch (action.type) {
    case types.GET_PROJECT_ASYNC.PENDING:
      return {
        ...state,
        loading: true
      }
    case types.GET_PROJECT_ASYNC.SUCCESS:
      let projects = action.projects.filter(content => content.sys.contentType.sys.id === 'projects')
      return {
        ...state,
        projects: projects,
        loading: false
      }
    case types.GET_PROJECT_ASYNC.ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
