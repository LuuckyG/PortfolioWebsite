import * as Markdown from 'react-markdown';
import styled from 'styled-components';
import BlogStyle from './BlogStyle';

const BlogArticle = styled.article`
  align-items: flex-start;
  display: flex;
`;

const BlogContents = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
`;

const BlogSubHeader = styled.div`
  margin-top: 1.5em;
`;

const BlogContent = ({ subHeading, content, children }) => (
  <BlogArticle>
    <BlogContents>
      <BlogStyle>
        <BlogSubHeader><Markdown source={subHeading} /></BlogSubHeader>
        <Markdown source={content} />
        {children}
      </BlogStyle>
    </BlogContents>
  </BlogArticle>
)

export default BlogContent;
