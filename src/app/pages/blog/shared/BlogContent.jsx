import React from 'react'
import * as Markdown from 'react-markdown'
import moment from 'moment'
import StatusTag from '../../../components/StatusTag'

const BlogContent = (props) => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <h1>{props.title}</h1>
          <div className="level-left">
            <StatusTag status={props.status} />
            <p className="level-item is-size-7">
              {moment(props.date).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MMM Do YYYY'
              })}
            </p>
            <p className="level-item is-size-7">by</p>
            <p className="level-item is-size-7"><i> {props.authorName}</i></p> 
          </div>
          <Markdown source={props.subHeading} />
          <Markdown
            source={
            props.limit
            ? props.content.split(" ").splice(0,props.limit).join(" ").concat('...')
            : props.content
            }
          />
        </div>
        { props.children }
      </div>
    </article>
  </div>
  )

export default BlogContent;
