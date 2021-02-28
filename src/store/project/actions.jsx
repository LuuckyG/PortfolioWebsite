import * as type from './types';

export function loadProject() {
  return { 
    type: type.GET_PROJECT_ASYNC.PENDING
  }
}
