import styled from 'styled-components';
import theme from '../utils/theme';

const Section = styled.section`
  @media only screen and (min-width: 768px) {
    margin: ${theme.spacing.xxl} 0;
  }
`;

const SectionHeader = styled.header`
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.lightgrey};
`;

Section.Header = SectionHeader;

export default Section;
