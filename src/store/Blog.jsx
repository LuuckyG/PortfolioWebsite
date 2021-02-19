import * as contentful from 'contentful'
import * as actions from './blog/actions'

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading())
    return client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error => {
        console.log(error)
        dispatch(actions.blogLoading(false))
      })
  }
}
