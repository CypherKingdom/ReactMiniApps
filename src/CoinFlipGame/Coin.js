function Coin(props) {
    return (
        <img src={props.src} alt={props.alt} style={{width: "100px", height: "100px"}} />
    )
}

export default Coin;