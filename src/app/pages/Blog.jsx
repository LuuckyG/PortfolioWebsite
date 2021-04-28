import { connect } from 'react-redux';
import styled from 'styled-components';

import BlogCard from './blog/BlogCard';
import Grid from '../components/Grid';
import Column from '../components/Column';
import Heading from '../components/Heading';
import Loader from '../components/Loader';

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -.25rem;
  margin-right: .5rem;
  margin-top: 30px !important;
  padding-bottom: 30px;

  &:last-child {
    margin-bottom: -.75rem;
  }
`;


const Blog = ({ blog }) => {
  return (
    <Grid>
      <Column centered largeMonitor={12} computer={12} tablet={12} mobile={12}>
        <Heading size="small">Code Blog</Heading>
        Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining.
        This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        {blog.loading
          ? <Loader className="has-text-primary"></Loader>
          :
          <BlogWrapper>
            {blog.posts
              .sort((a, b) => a.fields.date < b.fields.date ? 1 : -1)
              .map(({ fields }, i) =>
                <BlogCard key={i} {...fields} index={i} />
              )}
          </BlogWrapper>
        }
      </Column>
    </Grid>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}

export default connect(mapStateToProps)(Blog);
