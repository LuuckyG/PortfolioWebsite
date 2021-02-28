import React from 'react';
import { Link } from 'react-router-dom'

import HeaderImage from '../../components/HeaderImage'
import PageContent from '../../components/PageContent'
import BlogContent from './shared/BlogContent'


const BlogPost = ({ location: {state: {props}}} ) => (
  <>
    <HeaderImage 
        bg={props.cardImage.fields.file.url} 
        title={props.title}
        date={props.date}
        category={props.category}>
    </HeaderImage>

    <PageContent>
      <BlogContent { ...props } />

      <Link className="back-button button is-small is-link is-outlined" to='/blog'>
      Back to Blog</Link>
    </PageContent>    
  </>
)

export default BlogPost;
