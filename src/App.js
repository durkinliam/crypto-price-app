import {useEffect, useState} from "react";
import axios from "axios";
import {Coin} from "./components/Coin";
import styled from "styled-components";

function App() {
    const [listOfCoins, setListOfCoins] = useState([])
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=GBP").then((response) => {
            setListOfCoins(response.data.coins)
        })
    }, [])

    const filteredCoins = listOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchInput.toLowerCase());
    })

    return (
        <AppContainer>
            <CryptoHeader>
                <CryptoHeaderInput type='text' placeholder='Bitcoin...' onChange={(event) => {
                    setSearchInput(event.target.value)
                }}></CryptoHeaderInput>
            </CryptoHeader>
            <CryptoBody>{filteredCoins.map((coin) => {
                return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
            })}</CryptoBody>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
  height: auto;
  width: 100vw;
`

const CryptoHeader = styled.div`
  width: 100%;
  height: 200px;
  background-color: #FFC400FF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CryptoHeaderInput = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #FFFFFFFF;
  font-size: 20px;
  font-weight: bold;
  color: #000000FF;
  text-align: center;
  margin-top: 10px;
`

const CryptoBody = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`