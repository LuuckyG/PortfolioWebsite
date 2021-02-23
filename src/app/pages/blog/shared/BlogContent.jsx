import React from 'react'
import * as Markdown from 'react-markdown'

const BlogContent = (props) => (
  <article className="media">
    <div className="media-content">
      <div className="content">
        <Markdown
          source={
            props.limit
            ? props.content.split(" ").splice(0,props.limit).join(" ").concat('...')
            : props.content
          }
        ></Markdown>
      </div>
      { props.children }
    </div>
  </article>
  )

export default BlogContent;
