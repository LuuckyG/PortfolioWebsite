import * as Markdown from 'react-markdown';
import styled from 'styled-components';

import BlogNav from './shared/BlogNav';

const CardWrapper = styled.div`
  flex: none;
  width: 33.33333%;
  padding: 0.75rem;
  animation: fadeInUp 2s ease;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    width: 50%;
  }

  @keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: .25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  color: #4a4a4a;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  height: 100%;
`;

const CardHero = styled.div`
  display: block;
  position: relative;
`;

const CardFigure = styled.figure`
  display: block;  
  position: relative;
  padding-top: 75%;
`;

const CardImage = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;  
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: transparent;
  padding: 1.5rem;
`;

const BlogTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  flex-grow: 1;
`;

const BlogSubTitle = styled.div`
  margin-bottom: .25rem;
`;


const BlogCard = (props) => {
  const limit = 30;

  return (
    <CardWrapper idx={props.id}>
      <Card>
        <CardHero>
          <CardFigure>
            <CardImage src={props.cardImage.fields.file.url} alt='Article header image' />
          </CardFigure>
        </CardHero>
        <CardContent>
          <BlogTitle>{props.title}</BlogTitle>
          <BlogSubTitle>
            <Markdown source={
              props.subHeading.split(" ").length > limit
                ? props.subHeading.split(" ").splice(0, limit).join(" ").concat(' ...')
                : props.subHeading
            } />
          </BlogSubTitle>
        </CardContent>
        <BlogNav date={props.date} status={props.tatus} to={{
          pathname: `/blog${props.path}`,
          state: { props }
        }} />
      </Card>
    </CardWrapper>
  )
}

export default BlogCard;
