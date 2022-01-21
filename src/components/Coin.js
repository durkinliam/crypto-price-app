export const Coin = ({name, icon, price, symbol}) => {
    return (
        <div className='coin'>
            <h1>Name: {name}</h1>

            <h3>Price: {price}</h3>
            <h3>Symbol: {symbol}</h3>
        </div>
    )
}