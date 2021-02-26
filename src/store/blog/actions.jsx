import * as type from './types';

export function loadBlog() {
  return { 
    type: type.GET_BLOG_ASYNC.PENDING
  }
}
