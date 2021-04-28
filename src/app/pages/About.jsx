import styled from '@emotion/styled';

import me from '../assets/img/about.JPG'
import site from '../utils/site.json'
import Grid from '../components/Grid'
import Column from '../components/Column'
import Heading from '../components/Heading'
import Section from '../components/Section'
import ProgressBar from '../components/ProgressBar'
import Text from '../components/Text'
import { ImageWrapper, ProfileImg } from '../components/ProfileImage'

const TwoColumnsWrapper = styled.div`
  display: flex;
  gap: 2.5em;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
`;

const OneColumn = styled.div`
  flex: 1; 
  padding: 0 25px;
  
  @media only screen and (max-width: 1199px) {
    flex: 100%;
    padding: 0;
  }
`;

const TechnologiesWrapper = styled.ul`
  padding: 0 2em;
`;

const Technology = styled.li`
  padding: 0.5em 0;
`;


const About = () => {
  return (
    <Grid>
      <Column centered largeMonitor={12} computer={12} tablet={12} mobile={12}>
        <Heading size="small">About Me</Heading>
        <TwoColumnsWrapper>
          <OneColumn>
            <Section>
              <Text> {site.bio.about} </Text>
            </Section>
            <Section>
              <h1 style={{ fontSize: '2em' }}>Skills</h1>
              <TechnologiesWrapper>
                {site.technologies.map((tech, idx) => (
                  <Technology key={idx}>
                    {tech.name}
                    <ProgressBar
                      value={10 * tech.proficiency}
                    />
                  </Technology>
                ))}
              </TechnologiesWrapper>
            </Section>
          </OneColumn>
          <OneColumn>
            <ImageWrapper homeImg={false}>
              <ProfileImg border_rad={'25px'} src={me} alt="Me!" />
            </ImageWrapper>
          </OneColumn>
        </TwoColumnsWrapper>
      </Column>
    </Grid >
  )
}

export default About;