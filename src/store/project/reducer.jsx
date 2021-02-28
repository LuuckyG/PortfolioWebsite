import initialState from '../../store/initialState';
import * as types from './types';

export default function projectReducer(state=initialState.projects, action) {
  switch (action.type) {
    case types.GET_PROJECT_ASYNC.PENDING:
      return {
        ...state,
        loading: true
      }
    case types.GET_PROJECT_ASYNC.SUCCESS:
      return {
        ...state,
        projects: action.projects,
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
