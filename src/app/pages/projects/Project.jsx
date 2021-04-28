import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';
import { FaCalendarAlt, FaGithub } from 'react-icons/fa'
import { IoBusiness } from 'react-icons/io5'
import { ImLocation } from 'react-icons/im'
import StatusTag from '../../components/StatusTag';


const TimelineItem = styled.div`
`

const TimelineContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media only screen and (max-width: 1199px) {
    flex-direction: column-reverse;
  }  
`

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  p {
    margin-right: 1rem;

    svg {
      margin-right: .25rem;
      color: ${theme.colors.active_color};
    }
  }
`;

const ImagesWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  @media only screen and (max-width: 1199px) {
    flex: 1;
  }
`;


const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.div`
  margin: auto 0;
`;

const ProjectTechnologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: .5rem 0;
`;

const ProjectTechnology = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem 1rem; 
  font-weight: bold;
  border-radius: 10px;
  background-color: whitesmoke;
`;

const ProjectBannerImage = styled.div`
  height: 95%;
  width: auto;
  margin: auto;

  @media only screen and (max-width: 1199px) {
    margin: auto 0;
  }
`;

const ProjectScreenshots = styled.div`
`;

const GithubLink = styled.button`
  margin-top: 3rem;
  padding: 0.75rem 2rem;
  border: 1px solid ${theme.colors.active_color};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FFF;

  p {
    font-weight: bold;
    margin-right: 1rem;
  }

  svg {
    margin: .5rem;
    color: inherit;
  }

  &:hover {
    cursor: pointer;
    color: #FFF;
    background-color: ${theme.colors.active_color};

    svg {
      color: inherit;
    }
  }
`;



export default function Project({
  path,
  title,
  companyName,
  companyLocation,
  description,
  startdate,
  enddate,
  technologies,
  projectImage,
  otherImages,
  githubLink
}) {

  return (
    <TimelineItem>
      <ProjectTitle>
        {title}
      </ProjectTitle>
      <TimelineContent >
        <ProjectInfo>
          <ProjectDetails>
            <p>
              <FaCalendarAlt />
              {
                moment(startdate).calendar(null, {
                  sameDay: '[Today]',
                  lastDay: '[Yesterday]',
                  lastWeek: '[Last] dddd',
                  sameElse: 'MMM YYYY'
                })
              }
              {enddate && ' - '}
              {enddate
                ? moment(enddate).calendar('Still working on it', {
                  sameDay: '[Today]',
                  lastDay: '[Yesterday]',
                  lastWeek: '[Last] dddd',
                  sameElse: 'MMM YYYY'
                })
                : <StatusTag status='IN_PROGRESS' />
              }
            </p>
            {companyName && <p><IoBusiness />{companyName}</p>}
            {companyLocation && <p><ImLocation />{companyLocation}</p>}
          </ProjectDetails>
          <ProjectTechnologies>
            {technologies.map(tech => (
              <ProjectTechnology key={tech}> {tech} </ProjectTechnology>
            ))}
          </ProjectTechnologies>
          <ProjectDescription>
            {description}
          </ProjectDescription>
          {githubLink && <a href={githubLink}><GithubLink><p>View on Github</p> <FaGithub /></GithubLink></a>}
        </ProjectInfo>
        <ImagesWrapper>
          <ProjectBannerImage>
            <img src={projectImage} alt="Project hero"></img>
          </ProjectBannerImage>
          {otherImages &&
            otherImages.map(({ oImg, idx }) => (
              <ProjectScreenshots key={idx}>
                {/* <img src={oImg} alt={'Project #' + idx}></img> */}
              </ProjectScreenshots>
            ))
          }
        </ImagesWrapper>
      </TimelineContent>
    </TimelineItem>
  );
}

Project.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string,
  companyLocation: PropTypes.string,
  description: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  projectImage: PropTypes.string,
  otherImages: PropTypes.arrayOf(PropTypes.object),
  githubLink: PropTypes.string
};
