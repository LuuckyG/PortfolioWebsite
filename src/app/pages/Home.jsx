import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PageHeader from '../components/PageHeader'
import TimeLine from './home/TimeLine'
import BlogCard from './blog/BlogCard';
import Loader from '../components/Loader'


class Homepage extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="container">
        <PageHeader title="Welcome!">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </PageHeader>

        <TimeLine />

        <PageHeader title="My Recent Blogs">
          Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. 
          This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        </PageHeader>
        { this.props.blog.loading
          ? <Loader className="has-text-primary"></Loader>
          :
          <div className="blog-posts columns is-multiline">
            { this.props.blog.posts
              .sort((a, b) => a.fields.date < b.fields.date ? 1 : -1)
              .slice(0, 3)
              .map(({fields}, i) =>
              <BlogCard key={i} {...fields} />
            )}
          </div>
        }
        <div className="level-left">
          <Link className="level-item button is-small is-link is-outlined" to={'/blog'}>
            See All My Blogs</Link>
        </div>

      </main>
    )}
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}

export default connect(mapStateToProps) (Homepage);