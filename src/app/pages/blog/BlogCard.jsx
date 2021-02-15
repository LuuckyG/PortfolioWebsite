import React from 'react';
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'

const BlogCard = (props) => (
  <div className="column is-4">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.cardImage.fields.file.url} alt="Placeholder image"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://avatars.dicebear.com/api/initials/luuk%20geelen.svg" alt="Placeholder image"></img>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.authorName}</p>
            <p class="subtitle is-6">Lead Developer</p>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          { props.children }
        </div>
        <BlogNav date={props.date}  status={props.status} to={{
          pathname: `/blog${props.path}`,
          state: { props }
        }} />
      </div>
    </div>
  </div>
)

export default BlogCard;
