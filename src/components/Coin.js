import styled from "styled-components";

export const Coin = ({name, icon, price, symbol}) => {
    return (
        <StyledCoin>
            <h1>Name: {name}</h1>
                <CoinImage src={icon}/>
            <h3>Price: £{price.toFixed(2)}</h3>
            <h3>Symbol: {symbol}</h3>
        </StyledCoin>
    )
}

const StyledCoin = styled.div`
  width: 400px;
  height: 300px;
  background-color: #242424FF;
  color: #FFFFFFFF;
  box-shadow: #0000003D 0px 3px 8px;
  border-radius: 10px;
  margin: 20px;
  text-align: center;
`

const CoinImage = styled.img`
  height: 100px;
`