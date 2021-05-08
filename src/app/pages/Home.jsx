import ParticlesBg from 'particles-bg'
import { NavLink } from 'react-router-dom'
import { SiPython } from 'react-icons/si'
import { GiBookshelf, GiChessQueen } from 'react-icons/gi'
import styled from 'styled-components'

import me from '../assets/img/me.jpg'
import Grid from '../components/Grid'
import Column from '../components/Column'
import Heading from '../components/Heading'
import Text from '../components/Text'
import Button from '../components/Button'
import { ImageWrapper, ProfileImg } from '../components/ProfileImage'


const MainPage = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    @media only screen and (max-width: 800px) {
      margin: 20px auto 0 auto;
    }
  }
`;

const IntroList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const IntroItem = styled.li`
  padding: 0 10px 0 0;
`;

let config = {
  num: [2, 5],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [1, 1.5],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [.1, 0.3],
  position: "all",
  color: ["#28a745"],
  cross: "dead",
  random: 15
};

if (Math.random() > 0.9) {
  config = Object.assign(config, {
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  });
}

const Homepage = () => {
  return (
    <>
      <Grid>
        <Column centered largeMonitor={12} computer={12} tablet={12} mobile={12}>
          <MainPage>
            <MainText>
              <Heading>Luuk Geelen</Heading>
              <Text>
                Hi, There! Welcome on my Portfolio site!
            </Text>
            About me:
            <IntroList>
                <IntroItem> <SiPython /> Python Developer </IntroItem>
                <IntroItem> <GiBookshelf /> Continuous Learner </IntroItem>
                <IntroItem> <GiChessQueen /> Chess Lover </IntroItem>
              </IntroList>
              <NavLink to='/about' style={{ marginTop: 20 }}>
                <Button>See what I can do for you! &#128073;</Button>
              </NavLink>
            </MainText>
            <ImageWrapper homeImg={true}>
              <ProfileImg src={me} alt="Me!" />
            </ImageWrapper>

          </MainPage>
        </Column>
      </Grid>
      <ParticlesBg type="custom" config={config} bg={true} />
    </>
  )
}

export default Homepage;
