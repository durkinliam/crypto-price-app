import {useEffect, useState} from "react";
import axios from "axios";
import {Coin} from "./components/Coin";

function App() {
    const [listOfCoins, setListOfCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then((response) => {
            setListOfCoins(response.data.coins)
        })
    }, [])
    return (
        <>
            <div className='cryptoHeader'></div>
            <div className='cryptoDisplay'>{listOfCoins.map((coin) => {
                return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
            })}</div>
        </>
    );
}

export default App;
