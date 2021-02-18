import React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'
import PageHeader from '../../components/PageHeader'
import PageContent from '../../components/PageContent'
import BlogContent from './shared/BlogContent'


const BlogPost = ({ location: { state: { props } }}) => (
  <div className="container">
    <PageHeader title={props.title}>
      <Markdown source={props.subHeading} />
    </PageHeader>
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
  </div>
  )

export default BlogPost;
