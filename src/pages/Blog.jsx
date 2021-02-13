import React from 'react';
import BlogItem from './blog/BlogItem'
import * as contentful from 'contentful';
import { appendScript } from '../components/utils/appendScript'
import { removeScript } from '../components/utils/removeScript'


class Blog extends React.Component {
  
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    appendScript("/assets/js/clean-blog.min.js");

    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({})
      .then(response => {
        this.setState({
          posts: [response.items]
        });
      })
      .catch(console.error)
  }

  componentDidUnmount () {
    removeScript("/assets/js/clean-blog.min.js")
  }

  render() {
    if (!this.state.posts.length) return <div className="container-fluid mx-auto"><p>No posts found.</p></div>

    return (
      <div className="container-fluid">
        <p>This is the Blog Page</p>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
}


    /* return <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">

          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 className="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on September 24, 2019</p>
          </div>

          <hr></hr>

          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
              </h2>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on September 18, 2019</p>
          </div>

          <hr></hr>

          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Science has not yet mastered prophecy
              </h2>
              <h3 className="post-subtitle">
                We predict too much for the next year and yet far too little for the next ten.
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on August 24, 2019</p>
          </div>

          <hr></hr>

          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Failure is not an option
              </h2>
              <h3 className="post-subtitle">
                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on July 8, 2019</p>
          </div>

          <hr></hr>
          {/* <!-- Pager --> */
//           <div className="clearfix">
//             <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   }
// } */}

export default Blog;