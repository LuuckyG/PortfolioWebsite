import React from 'react';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

const MediumNote = (props) => (
    <>
        <Heading size="small">Do You Like My Content?</Heading>
        <Text>Take a look at my Medium! Medium is where I ramble and rant and tell stories. I orginally was going to use it as a coding blog, I don't like having to use Gist for all my code snippets. So I created this site.</Text>
        <br /><br />
        <a className="button is-inverted is-outlined" href="https://medium.com/@lhc.geelen" target="_blank" rel="noreferrer">
            View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
                <i className="fab fa-lg fa-medium"></i>
            </span>
        </a>
    </>
)

export default MediumNote