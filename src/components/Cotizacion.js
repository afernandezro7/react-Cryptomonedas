import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

/** STYLED COMPONENTS **/
const StResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;

`;
const StInfo = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
    }
`;
const StPrecio = styled.p`
    font-size: 30px;

    span{
        font-weight: bold;
    }
`;



/** FUNCTIONAL COMPONENT **/
const Cotizacion = ({cotizacion}) => {

    if(Object.keys(cotizacion).length === 0) return null;

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion

    return (
        <StResultadoDiv>
            <StPrecio>El precio es: <span>{ PRICE }</span></StPrecio> 
            <StInfo>Precio más alto del día: <span>{ HIGHDAY }</span></StInfo> 
            <StInfo>Precio más bajo del día: <span>{ LOWDAY }</span></StInfo> 
            <StInfo>Variación últimas 24h: <span>{ CHANGEPCT24HOUR }</span></StInfo> 
            <StInfo>Última Actualización: <span>{ LASTUPDATE }</span></StInfo> 
        </StResultadoDiv>
    )
}

Cotizacion.propTypes = {
    cotizacion: PropTypes.object.isRequired
}

export default Cotizacion
