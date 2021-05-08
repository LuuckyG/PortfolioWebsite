import { combineReducers } from 'redux'
import blog from './blog/reducer'
import project from './project/reducer'

export const rootReducer = combineReducers({
    blog,
    project
})
