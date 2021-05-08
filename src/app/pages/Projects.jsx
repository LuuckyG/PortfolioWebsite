import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Text from '../components/Text';
import Grid from '../components/Grid';
import Column from '../components/Column';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Loader from '../components/Loader';

import Project from './projects/Project';


const ProjectTimeline = styled.ul`
`

const ProjectContainer = styled.li`
  padding: 5em 0;
  
  &:not(:last-of-type) { 
    border-bottom: 1px solid black;
  }

  &:first-of-type { 
    margin-top: 2em;
  }
`;

const Projects = props => {
  const renderProject = project => (
    <Project
      path={project.path}
      title={project.title}
      companyName={project.companyName}
      companyLocation={project.companyLocation}
      description={project.description}
      startdate={project.startdate}
      enddate={project.enddate}
      technologies={project.technologies}
      projectImage={project.projectImage.fields.file.url}
      otherImages={project.otherImages}
      githubLink={project.githubLink}
    />
  );

  return (
    <Grid>
      <Column centered largeMonitor={12} computer={12} tablet={12} mobile={12}>
        <Heading size="small">Highlighted Projects</Heading>
        <Text>This are some of my projects, both fun and professional!</Text>
        {props.project.loading
          ? <Loader className="has-text-primary" />
          :
          <ProjectTimeline className="timeline">
            {props.project.projects
              .sort((a, b) => a.fields.startdate < b.fields.startdate ? 1 : -1)
              .map(({ fields, i }) => (
                <ProjectContainer key={i}>
                  {renderProject(fields)}
                </ProjectContainer>
              ))}
          </ProjectTimeline>
        }
        <NavLink to='/contact' style={{ margin: '20 auto' }}>
          <Button>Interested? Contact me! &#128073;</Button>
        </NavLink>
      </Column>
    </Grid>
  )
};

function mapStateToProps(state, ownProps) {
  return {
    project: state.project
  }
}

export default connect(mapStateToProps)(Projects);
