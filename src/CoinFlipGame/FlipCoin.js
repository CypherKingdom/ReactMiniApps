import { useState } from 'react';
import Coin from './Coin';
import head from './heads.jpg';
import tails from './tails.jpg';

function FlipCoin() {
    const [currFace, setCurrFace] = useState(false);
    const [headsCount, setHeadsCount] = useState(0);
    const [totalFlips, setTotalFlips] = useState(0);
    
    const flip = () => {
        const isHeads = (Math.random() < 0.5);
        setCurrFace(isHeads);
        setHeadsCount(prevCount => isHeads ? prevCount + 1 : prevCount);
        setTotalFlips(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>Flip Coin</h1>
            {totalFlips!==0 && <Coin src={currFace === true ? head : tails} alt={currFace ? "heads" : "tails"} />}<br/>
            <button onClick={flip}>Flip</button>
            <p>Heads: {headsCount}</p>
            <p>Total: {totalFlips}</p>
        </div>
    )
}

export default FlipCoin;