import { createAction } from './Utilities'
import * as types from './project/types'

export const actions = {
  pending: () => createAction(types.GET_PROJECT_ASYNC.PENDING),
  success: (projects) => createAction(types.GET_PROJECT_ASYNC.SUCCESS, { projects }),
  error: (error) => createAction(types.GET_PROJECT_ASYNC.ERROR, { error })
}
