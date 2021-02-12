import React from "react";
import Layout from './app/Layout'


class App extends React.Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default App

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       blogs: [],
//       videos: [],
//       latestBlogs: []
//     };
//   }

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Header />

//           <Route exact path="/" component={Homepage} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/blogs" component={Blogs} />
//           <Route exact path="/courses" component={Courses} />
//           <Route exact path="/projects" component={Projects} />
//           <Route exact path="/contact" component={Contact} />

//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// };
