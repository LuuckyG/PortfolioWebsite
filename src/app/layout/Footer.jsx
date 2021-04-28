import styled from 'styled-components';
import theme from '../utils/theme';
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa'
import { github, linkedin, medium } from '../utils/constants';

const FooterContainer = styled.footer`
  color: ${theme.colors.blackgrey};
  background-color: ${theme.colors.white};
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  padding-top: 2em;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  flex-shrink: 0;
  

  @media only screen and (max-width: 1199px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const FooterFill = styled.div`
  visibility: hidden;
  flex: 1;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const FooterSocialsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;

  @media only screen and (max-width: 1199px) {
    flex: 1;
  }
`;

const FooterSocials = styled.ul`
  margin: auto;
  padding: 0;
`

const FooterSocial = styled.li`
  font-size: 1.25em;
  margin-left: 2.5em;
  text-align: center;
  list-style-type: none;
  display: inline-block;
  transition: .2s ease-in-out;

  a {
    color: ${theme.colors.blackgrey};

    &:hover {
      color: ${theme.colors.active_color};
    }
  }
  
  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.3);
  }
`;

const CopyRight = styled.small`
  text-align: center;
  flex: 1;
  padding: 2rem 0;

  @media only screen and (max-width: 1199px) {
    padding: 1rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterFill />
      <FooterSocialsWrapper>
        <FooterSocials>
          <FooterSocial>
            <a href={`${medium}`}>
              <FaMedium />
            </a>
          </FooterSocial>
          <FooterSocial>
            <a href={`${github}`}>
              <FaGithub />
            </a>
          </FooterSocial>
          <FooterSocial>
            <a href={`${linkedin}`}>
              <FaLinkedin />
            </a>
          </FooterSocial>
        </FooterSocials>
      </FooterSocialsWrapper>
      <CopyRight> Copyright &copy; Luuk Geelen {new Date().getFullYear()} </CopyRight>
    </FooterContainer>
  )
}

export default Footer
