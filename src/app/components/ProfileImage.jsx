import styled from 'styled-components';

export const ImageWrapper = styled.div(({ homeImg }) => `
    margin: auto;
    display: flex;
    flex: 1;
    align-items: center;
    animation: ${homeImg ? 'fadeInDown' : 'fadeInUp'} 2s ease;

    @media only screen and (max-width: 1399px) {
        align-items: start;
        margin: 0;
    }

    @media only screen and (max-width: 1199px) {
        width: 80%;
        margin: 0 auto;
    }

    ${homeImg &&
    `@media only screen and (max-width: 799px) {
            display: none;
        }        
    `}

    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translateY(-50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`);

export const ProfileImg = styled.img(({ border_rad = '50%' }) => `
    margin: auto;
    object-fit: cover;
    opacity: 1;
    border-radius: ${border_rad};
    
    @media only screen and (max-width: 1399px) {
        width: 100%;
        align-items: start;
    }
`);