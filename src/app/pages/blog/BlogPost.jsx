import React from 'react'
import * as Markdown from 'react-markdown'
import PageHeader from '../../components/PageHeader'
import PageContent from '../../components/PageContent'
import BlogContent from './shared/BlogContent'
import BlogNav from './shared/BlogNav'


const BlogPost = ({ location: { state: { props } }}) => (
  <div className="container">
    <PageHeader title={props.title}>
      <Markdown source={props.subHeading} />
    </PageHeader>
    <PageContent>
      <BlogNav date={props.date}  status={props.status} to={{
            pathname: `/blog`,
            state: { props }
          }} />
      <BlogContent {...props } />
    </PageContent>
  </div>
  )

export default BlogPost;
