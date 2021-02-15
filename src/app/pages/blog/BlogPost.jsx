import React from 'react'
import { Link } from 'react-router-dom'
import PageContent from '../../components/PageContent'
import BlogContent from './shared/BlogContent'


const BlogPost = ({ location: { state: { props } }}) => (
    <PageContent>
      <BlogContent {...props } />
      <div className="level-left">
        <Link className="level-item button is-small is-link is-outlined" to={{
          pathname: `/blog`,
          state: { props }
        }}>Back to the Blog
        </Link>
      </div>
    </PageContent>
  )

export default BlogPost;
