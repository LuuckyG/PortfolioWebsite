import React from 'react';
import styled from '@emotion/styled';

import theme from '../utils/theme'

const ProgressBarWrapper = styled.div`
    background: #eee;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => `${theme.colors.white}`};
    border-radius: .5rem;
`;

const Progress = styled.div(({ percentage, start_color, end_color }) => ({
    background: `linear-gradient(45deg, ${start_color}, ${end_color})`,
    width: `${percentage}%`,
    height: "10px",
    padding: "0.05em",
    fontSize: "bold",
    transition: '1s ease',
    transitionDelay: '0.25s',
    borderRadius: '1rem'
}))


var ProgressBar = ({
    value,
    start_color = theme.colors.lightgreen,
    end_color = theme.colors.darkgreen }) => {

    const [percentage, setPercentage] = React.useState(0);

    React.useEffect(() => {
        setPercentage(value);
    }, [value]);

    return (
        <ProgressBarWrapper>
            <Progress
                percentage={percentage}
                start_color={start_color}
                end_color={end_color}>
                <span>{ }</span>
            </Progress>
        </ProgressBarWrapper>
    );
}

export default ProgressBar;