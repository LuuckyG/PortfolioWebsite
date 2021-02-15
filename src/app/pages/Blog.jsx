import React from 'react';
import * as contentful from 'contentful';
import BlogCard from './blog/BlogCard'
import PageHeader from '../components/PageHeader'


class Blog extends React.Component {
  
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });

  componentDidMount() {
    this.client
      .getEntries()
      .then(response => {
        this.setState({
          posts: response.items
        });
      })
      .catch(console.error)
  }

  render() {
    if (!this.state.posts.length) return <div className="container"><p>No posts found.</p></div>

    return (
      <div className="container">
        <PageHeader title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. 
          This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        </PageHeader>
        <div className="columns is-multiline">
          { this.state.posts.map(({fields}, i) =>
            <BlogCard key={i} {...fields} />, 
          )}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Blog;
