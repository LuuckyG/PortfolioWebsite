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
        This blog is a chronological mix of posts on my work in fun and professional projects. The blog posts will contain <strong>project walkthroughs</strong>, but are also about everything I learn on the way. Subjects that I will mostly cover are <strong>Python</strong>, <strong>Machine</strong> and <strong>Deep Learning </strong>, <strong>JavaScript</strong> and <strong>React</strong>.
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
