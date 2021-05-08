import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import StatusTag from '../../../components/StatusTag';

const BlogNavItems = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;

export const BlogButton = styled.div`
  font-size: .75rem;
  padding: .5rem 0;

  a {
    padding: .5rem;
    border-radius: 5px;
    background-color: transparent;
    border: solid 1px #0074d9;
    color: #0074d9;
  }

  &:hover {
    cursor: pointer;

    a {
      font-weight: bold;
      color: #FFF;
      background-color: #0074d9;
    }
  }
`;

const BlogDate = styled.p`
  font-size: .75rem;
  margin-left: auto;

  @media only screen and (max-width: 399px) {
    display: none;
  }
`;


const BlogNav = ({ to, date, status }) => (
  <BlogNavItems>
    <BlogButton>
      <Link to={to}>
        {to.pathname === '/blog' ? 'Back to Blog' : 'Read More'}</Link>
    </BlogButton>
    <BlogDate>
      {moment(date).calendar(null, {
        sameDay: '[Today]',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'MMM Do YYYY'
      })}
    </BlogDate>
    <StatusTag status={status} />
  </BlogNavItems>
)

export default BlogNav
