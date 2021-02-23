import React from 'react';

import HeaderImage from '../../components/HeaderImage'
import PageContent from '../../components/PageContent'
import BlogContent from './shared/BlogContent'


const BlogPost = ({ location: {state: {props}}} ) => (
  <>
    <HeaderImage 
        bg={props.cardImage.fields.file.url} 
        title={props.title}
        subtitle={props.subHeading}>
    </HeaderImage>

    <PageContent>
      <BlogContent { ...props } />
    </PageContent>
  </>
)

export default BlogPost;
