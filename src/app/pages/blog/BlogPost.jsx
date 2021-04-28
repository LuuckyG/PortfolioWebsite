import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'

import { BlogButton } from './shared/BlogNav'
import Grid from '../../components/Grid'
import Column from '../../components/Column'
import CategoryTag from '../../components/CategoryTag'
import BlogContent from './shared/BlogContent'

const HeaderImageWrapper = styled.section(props => ({
  margin: 0,
  padding: 0,
  backgroundImage: `url(${props.bg})`,
  display: 'flex',
  alignItems: 'center',
  width: "100%",
  height: "600px"
}));

const HeaderTitleBackground = styled.div`
  color: #FFF;
  width: 40%;
  min-height: 300px;
  margin: auto;
  background-color: rgba(25, 25, 25, 0.8);
  border-radius: 15px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    width: 80%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 60%;
  }
`;

const HeaderTitle = styled.div`
  font-size: 4rem;
  padding-top: 20px;
  margin-bottom: 30px;

  @media only screen and (max-width: 767px) {
    font-size: 2.25rem;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;

const BlogDate = styled.div`
  padding-bottom: 20px;
`;

const BlogTags = styled.ul`
  padding-bottom: 20px;
`;

const BlogPost = ({ location: { state: { props } } }) => (
  <>
    <HeaderImageWrapper bg={props.cardImage.fields.file.url}>
      <HeaderTitleBackground>
        <HeaderTitle>{props.title}</HeaderTitle>
        <BlogDate>
          {moment(props.date).calendar(null, {
            sameDay: '[Today]',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MMM Do YYYY'
          })} by {props.author}
        </BlogDate>
        <BlogTags>
          {props.category.map((c, index) =>
            <CategoryTag key={index} category={c} />
          )}
        </BlogTags>
      </HeaderTitleBackground>
    </HeaderImageWrapper>
    <Grid>
      <Column centered largeMonitor={8} computer={8} tablet={8} mobile={8}>
        <BlogContent {...props} />
        <BlogButton>
          <NavLink to='/blog'>
            Back to Blog
            </NavLink>
        </BlogButton>
      </Column>
    </Grid>
  </>
)

export default BlogPost;
