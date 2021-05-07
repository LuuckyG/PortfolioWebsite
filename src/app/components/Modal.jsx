import styled from 'styled-components';
import theme from '../utils/theme';

const ModalComponent = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    width: 50%;
    background-color: #fff;
    border-radius: 10px;
`;

const ModalHeader = styled.div`
    padding: 1.5em;
`;

const ModalTitle = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 1.25em;
`;

const ModalBody = styled.div`
    padding: 2em;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

const ModalFooter = styled.div`
    padding: 0.5em 1.5em;
    text-align: right;
`;

const ModalButton = styled.button`
    color: #fff;
    background-color: ${theme.colors.active_color};
    border: 1px solid #eee;
    border-radius: 5%;

    &:hover {
        cursor: pointer;
        color: #000;
        background-color: #eee;
    }
`;


const Modal = ({ show, loading, title, message, setShow }) => {
    if (!show) {
        return null
    }

    return (
        <ModalComponent>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>
                        {title}
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    <ModalButton onClick={() => !loading && setShow(false)}>{loading ? 'Sending...' : 'Close'}</ModalButton>
                </ModalFooter>
            </ModalContent>
        </ModalComponent>
    )
}

export default Modal;