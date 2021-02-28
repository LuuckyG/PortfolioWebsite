import React from 'react';
import { connect } from 'react-redux'
import PageHeader from '../components/PageHeader'
import Project from './projects/Project';
import TimeLine from './projects/TimeLine';
import Loader from '../components/Loader';

class Projects extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <div className="container">
        <PageHeader title="Highlighted Projects">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </PageHeader>

        { this.props.project.loading
          ? <Loader className="has-text-primary"></Loader>
          :
          <div className="blog-posts columns is-multiline">
            { this.props.project.projects
              .sort((a, b) => a.fields.date < b.fields.date ? 1 : -1)
              .map(({fields}, i) =>
              <Project key={i} {...fields} />
            )}
          </div>
        }

        <TimeLine />
      </div>
    )};
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.project
  }
}

export default connect(mapStateToProps) (Projects);


// import React from 'react';
// import styled from '@emotion/styled';
// import Layout from '../components/Layout';
// import Heading from '../components/Heading';
// import Project from '../components/Project';
// import Text from '../components/Text';
// import SEO from '../components/SEO';
// import Grid from '../components/Grid';
// import Column from '../components/Column';
// import Section from '../components/Section';

// const ProjectListItem = styled.li`
//   &:not(:last-of-type) {
//     border-bottom: 1px solid #f1f1f1;
//   }
// `;

// const ProjectsPage = props => {
//   const renderProject = project => (
//     <Project
//       title={project.title}
//       description={project.description}
//       timeInMinutes={project.timeInMinutes}
//       href={project.href}
//       tags={project.tags}
//       bannerImgData={project.banner.childImageSharp.fluid}
//       screenshotListImgData={project.screenshots.map(ss => ss.childImageSharp.fluid)}
//       githubUrl={project.githubUrl}
//     />
//   );
//   return (
//     <Layout>
//       <SEO
//         title="Projects"
//         description="Browse Aggelos Arvanitakis' freelancing, open source & fun projects"
//       />
//       <Grid>
//         <Column centered largeMonitor={12}>
//           <Section>
//             <Section.Header>
//               <Heading size="small">Commercial Projects</Heading>
//             </Section.Header>
//             <Text>
//               This is a list of projects that I have professionally worked on. The technologies
//               shown in the tags, are not only the ones that this particular project employs, but the
//               ones that I have personally worked with in each product. The list is not exhaustive,
//               but only includes the projects that I'm allowed to disclose.
//             </Text>
//             <ul id="commercial-projects">
//               {props.data.commercialProjects.edges.map(({ node: { frontmatter: project } }) => (
//                 <ProjectListItem key={project.title}>{renderProject(project)}</ProjectListItem>
//               ))}
//             </ul>
//           </Section>
//           <Section>
//             <Section.Header>
//               <Heading size="small">Open Source & Fun Projects</Heading>
//             </Section.Header>
//             <Text>
//               This is a list of projects that I have either open-sourced or developed for fun. At
//               least they were all "fun" in the beginning...
//             </Text>
//             <ul id="fun-projects">
//               {props.data.funProjects.edges.map(({ node: { frontmatter: project } }) => (
//                 <ProjectListItem key={project.title}>{renderProject(project)}</ProjectListItem>
//               ))}
//             </ul>
//           </Section>
//         </Column>
//       </Grid>
//     </Layout>
//   );
// };

// export default ProjectsPage;
