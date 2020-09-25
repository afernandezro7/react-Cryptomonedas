import axios from 'axios'

export const AxiosAPI = async(moneda) => {
   
    const APIKey = '89749fd8de79ba4afa80275ee8e47d02bbf3ff80d94c0f8d2f705e43d6e95b74';
    
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${ encodeURI(moneda) }&api_key=${encodeURI(APIKey)}`;
    
    
    const resultado = await axios.get(url)
    
    return resultado;
}

export const helperCalcularCrypto = async(moneda,cryptomoneda) => {
   
    const APIKey = '89749fd8de79ba4afa80275ee8e47d02bbf3ff80d94c0f8d2f705e43d6e95b74';
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ encodeURI(cryptomoneda) }&tsyms=${ encodeURI(moneda) }&api_key=${encodeURI(APIKey)}`;
    
    
    const resultado = await axios.get(url)
    
    return resultado;
}
