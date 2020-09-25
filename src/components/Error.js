import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'


/** STYLED COMPONENTS **/
const StMensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #ffffff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;



/** GLOBAL FUNCTIONAL COMPONENT **/
const Error = ( { msg } ) => {
    return (
        <StMensajeError>
            { msg }
        </StMensajeError>
    )
}

Error.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Error
