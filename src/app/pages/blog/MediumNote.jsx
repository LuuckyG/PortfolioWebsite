import React from 'react';
import PageHeader from '../../components/PageHeader';

const MediumNote = (props) => (
    <PageHeader className="" color="is-dark" title="Do You Like My Content?">
        Take a look at my Medium! Medium is where I ramble and rant and tell stories. I orginally was going to use it as a coding blog, I don't like having to use Gist for all my code snippets. So I created this site.
        <br /><br />
        <a className="button is-inverted is-outlined" href="https://medium.com/@lhc.geelen" target="_blank" rel="noreferrer">
        View My Medium
        <span className="icon" style={{ marginLeft: 5 }}>
            <i className="fab fa-lg fa-medium"></i>
        </span>
        </a>
    </PageHeader>
)

export default MediumNote