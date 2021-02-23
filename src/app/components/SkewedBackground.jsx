import styled from 'styled-components'

const SkewedBackground = styled.div`
    background-image: linear-gradient(to right top, #65dfc9, #6cdbeb);
    transform: skewY(-7deg);
    display: flex;
    align-items: center;
    margin-top: 5rem;
    position: relative;
    height: 60rem;
    width: 100vw;
    z-index: -1;
`
export default SkewedBackground
