import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadBlog } from './store/blog/actions'
import { loadProject } from './store/project/actions'

const store = configureStore()
store.dispatch(loadBlog())
store.dispatch(loadProject())

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
