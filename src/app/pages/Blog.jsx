import React from 'react';
import { connect } from 'react-redux'
import BlogCard from './blog/BlogCard';
import MediumNote from './blog/MediumNote';
import PageHeader from '../components/PageHeader';
import Loader from '../components/Loader'


class Blog extends React.Component {
  render() {
    return (
      <>
      <div className="container">
        <PageHeader title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. 
          This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        </PageHeader>
        { this.props.blog.loading
          ? <Loader className="has-text-primary"></Loader>
          :
          <div className="blog-posts columns is-multiline">
            { this.props.blog.posts.map(({fields}, i) =>
              <BlogCard key={i} {...fields} />
            )}
          </div>
        }
      </div>
      <MediumNote className="medium-note"/>
      </>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}

export default connect(mapStateToProps) (Blog);
